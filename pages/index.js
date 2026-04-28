import { useState, useEffect, useCallback } from 'react'
import { phases, getAllItems, getTotalByPhase } from '../data/auditData'
import styles from '../styles/Home.module.css'

const STORAGE_KEY = 'audit_keamanan_digital_v1'

export default function Home() {
  const [checked, setChecked] = useState({})
  const [activePhase, setActivePhase] = useState('persiapan')
  const [activeStep, setActiveStep] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [showReset, setShowReset] = useState(false)
  const [notes, setNotes] = useState({})
  const [showNoteFor, setShowNoteFor] = useState(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const data = JSON.parse(saved)
        setChecked(data.checked || {})
        setNotes(data.notes || {})
      }
    } catch (e) {}
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ checked, notes }))
    } catch (e) {}
  }, [checked, notes, loaded])

  useEffect(() => {
    const phase = phases.find(p => p.id === activePhase)
    if (phase && phase.steps.length > 0) {
      setActiveStep(phase.steps[0].id)
    }
  }, [activePhase])

  const toggle = useCallback((id) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }))
  }, [])

  const allItems = getAllItems()
  const totalItems = allItems.length
  const checkedCount = allItems.filter(i => checked[i.id]).length
  const progress = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0

  const getPhaseProgress = (phaseId) => {
    const phase = phases.find(p => p.id === phaseId)
    if (!phase) return { done: 0, total: 0, pct: 0 }
    const phaseItems = allItems.filter(i => i.phaseId === phaseId)
    const done = phaseItems.filter(i => checked[i.id]).length
    const total = phaseItems.length
    return { done, total, pct: total > 0 ? Math.round((done / total) * 100) : 0 }
  }

  const getStepProgress = (stepId) => {
    const stepItems = allItems.filter(i => i.stepId === stepId)
    const done = stepItems.filter(i => checked[i.id]).length
    return { done, total: stepItems.length }
  }

  const currentPhase = phases.find(p => p.id === activePhase)
  const currentStep = currentPhase?.steps.find(s => s.id === activeStep)

  const handleReset = () => {
    setChecked({})
    setNotes({})
    setShowReset(false)
  }

  if (!loaded) return <div className={styles.loading}><span>Memuat...</span></div>

  return (
    <div className={styles.root}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>⚙</span>
            <div>
              <div className={styles.logoTitle}>Audit Keamanan Digital</div>
              <div className={styles.logoSub}>SAFEnet — Panduan Interaktif 2025</div>
            </div>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.globalProgress}>
              <div className={styles.gpLabel}>
                <span>Progres Keseluruhan</span>
                <span className={styles.gpPct}>{progress}%</span>
              </div>
              <div className={styles.gpBar}>
                <div className={styles.gpFill} style={{ width: `${progress}%` }} />
              </div>
              <div className={styles.gpCount}>{checkedCount} / {totalItems} item</div>
            </div>
            <button className={styles.resetBtn} onClick={() => setShowReset(true)} title="Reset semua">
              ↺
            </button>
          </div>
        </div>
      </header>

      {/* Reset Modal */}
      {showReset && (
        <div className={styles.modal} onClick={() => setShowReset(false)}>
          <div className={styles.modalBox} onClick={e => e.stopPropagation()}>
            <h3>Reset Semua Progres?</h3>
            <p>Seluruh centang dan catatan akan dihapus. Tindakan ini tidak dapat dibatalkan.</p>
            <div className={styles.modalActions}>
              <button className={styles.cancelBtn} onClick={() => setShowReset(false)}>Batal</button>
              <button className={styles.confirmBtn} onClick={handleReset}>Ya, Reset</button>
            </div>
          </div>
        </div>
      )}

      <div className={styles.layout}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <nav className={styles.phaseNav}>
            {phases.map(phase => {
              const pp = getPhaseProgress(phase.id)
              const isActive = activePhase === phase.id
              return (
                <button
                  key={phase.id}
                  className={`${styles.phaseBtn} ${isActive ? styles.phaseBtnActive : ''} ${styles[`phase_${phase.color}`]}`}
                  onClick={() => setActivePhase(phase.id)}
                >
                  <div className={styles.phaseBtnTop}>
                    <span className={styles.phaseLetter}>Bagian {phase.label}</span>
                    <span className={styles.phasePct}>{pp.pct}%</span>
                  </div>
                  <div className={styles.phaseTitle}>{phase.title}</div>
                  <div className={styles.phaseMiniBar}>
                    <div className={styles.phaseMiniBarFill} style={{ width: `${pp.pct}%` }} />
                  </div>
                </button>
              )
            })}
          </nav>

          {currentPhase && (
            <div className={styles.stepNav}>
              {currentPhase.steps.map(step => {
                const sp = getStepProgress(step.id)
                const isActive = activeStep === step.id
                return (
                  <button
                    key={step.id}
                    className={`${styles.stepBtn} ${isActive ? styles.stepBtnActive : ''}`}
                    onClick={() => setActiveStep(step.id)}
                  >
                    <span className={styles.stepIcon}>{step.icon}</span>
                    <span className={styles.stepLabel}>{step.title}</span>
                    <span className={styles.stepCount}>{sp.done}/{sp.total}</span>
                  </button>
                )
              })}
            </div>
          )}

          <div className={styles.sidebarFooter}>
            <div className={styles.legend}>
              <div className={styles.legendItem}>
                <span className={styles.legendDot} style={{ background: 'var(--gold)' }} />
                <span>Persiapan</span>
              </div>
              <div className={styles.legendItem}>
                <span className={styles.legendDot} style={{ background: 'var(--accent)' }} />
                <span>Pelaksanaan</span>
              </div>
              <div className={styles.legendItem}>
                <span className={styles.legendDot} style={{ background: 'var(--green)' }} />
                <span>Pelaporan</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className={styles.main}>
          {currentStep && (
            <div className={styles.stepContent} key={currentStep.id}>
              <div className={styles.stepHeader}>
                <div className={styles.stepHeaderIcon}>{currentStep.icon}</div>
                <div>
                  <div className={styles.stepHeaderPhase}>
                    Bagian {currentPhase.label} — {currentPhase.title}
                  </div>
                  <h1 className={styles.stepHeaderTitle}>{currentStep.title}</h1>
                  <p className={styles.stepHeaderDesc}>{currentStep.description}</p>
                </div>
              </div>

              <div className={styles.sections}>
                {currentStep.sections.map((section, si) => (
                  <Section
                    key={si}
                    section={section}
                    checked={checked}
                    notes={notes}
                    onToggle={toggle}
                    showNoteFor={showNoteFor}
                    setShowNoteFor={setShowNoteFor}
                    onNoteChange={(id, val) => setNotes(prev => ({ ...prev, [id]: val }))}
                    phaseColor={currentPhase.color}
                  />
                ))}
              </div>

              {/* Step Complete Banner */}
              {(() => {
                const sp = getStepProgress(currentStep.id)
                if (sp.total > 0 && sp.done === sp.total) {
                  return (
                    <div className={styles.completeBanner}>
                      <span>✓</span>
                      <span>Seluruh item pada tahap ini telah diselesaikan!</span>
                    </div>
                  )
                }
                return null
              })()}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

function Section({ section, checked, notes, onToggle, showNoteFor, setShowNoteFor, onNoteChange, phaseColor }) {
  if (section.type === 'info') {
    return (
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{section.title}</h2>
        <div className={styles.infoCards}>
          {section.cards.map((card, i) => (
            <div key={i} className={styles.infoCard}>
              <div className={styles.infoCardIcon}>{card.icon}</div>
              <div className={styles.infoCardTitle}>{card.title}</div>
              <div className={styles.infoCardDesc}>{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (section.type === 'pakem') {
    const allCatItems = section.categories.flatMap(c => c.items)
    const done = allCatItems.filter(i => checked[i.id]).length
    const total = allCatItems.length
    const score = total > 0 ? Math.round((done / total) * 100) : 0

    let riskLevel = 'Sangat Tinggi'
    let riskColor = '#c8411a'
    if (score >= 81) { riskLevel = 'Sangat Rendah'; riskColor = '#3d7a4e' }
    else if (score >= 61) { riskLevel = 'Rendah'; riskColor = '#5a9e6f' }
    else if (score >= 41) { riskLevel = 'Sedang'; riskColor = '#c9a84c' }
    else if (score >= 21) { riskLevel = 'Tinggi'; riskColor = '#d97706' }

    return (
      <div className={styles.section}>
        <div className={styles.pakemHeader}>
          <h2 className={styles.sectionTitle}>{section.title || 'PAKEM DIRI'}</h2>
          <div className={styles.pakemScore}>
            <div className={styles.pakemScoreNum} style={{ color: riskColor }}>{score}%</div>
            <div className={styles.pakemRisk} style={{ color: riskColor }}>
              Tingkat Risiko: <strong>{riskLevel}</strong>
            </div>
            <div className={styles.pakemCount}>{done}/{total} terpenuhi</div>
          </div>
        </div>
        {section.description && <p className={styles.pakemDesc}>{section.description}</p>}
        <div className={styles.pakemCategories}>
          {section.categories.map((cat, ci) => (
            <div key={ci} className={styles.pakemCat}>
              <div className={styles.pakemCatTitle}>{cat.title}</div>
              <div className={styles.checkList}>
                {cat.items.map(item => (
                  <CheckItem
                    key={item.id}
                    item={item}
                    checked={checked}
                    notes={notes}
                    onToggle={onToggle}
                    showNoteFor={showNoteFor}
                    setShowNoteFor={setShowNoteFor}
                    onNoteChange={onNoteChange}
                    phaseColor={phaseColor}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Default: checklist
  const done = section.items.filter(i => checked[i.id]).length
  const total = section.items.length
  const pct = total > 0 ? Math.round((done / total) * 100) : 0

  return (
    <div className={styles.section}>
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>{section.title}</h2>
        <div className={styles.sectionProgress}>
          <span className={styles.sectionPct}>{done}/{total}</span>
          <div className={styles.sectionBar}>
            <div className={`${styles.sectionBarFill} ${styles[`bar_${phaseColor}`]}`} style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>
      <div className={styles.checkList}>
        {section.items.map(item => (
          <CheckItem
            key={item.id}
            item={item}
            checked={checked}
            notes={notes}
            onToggle={onToggle}
            showNoteFor={showNoteFor}
            setShowNoteFor={setShowNoteFor}
            onNoteChange={onNoteChange}
            phaseColor={phaseColor}
          />
        ))}
      </div>
    </div>
  )
}

function CheckItem({ item, checked, notes, onToggle, showNoteFor, setShowNoteFor, onNoteChange, phaseColor }) {
  const isChecked = !!checked[item.id]
  const hasNote = notes[item.id] && notes[item.id].trim().length > 0
  const showNote = showNoteFor === item.id

  return (
    <div className={`${styles.checkItem} ${isChecked ? styles.checkItemDone : ''}`}>
      <button
        className={`${styles.checkbox} ${isChecked ? styles.checkboxChecked : ''} ${styles[`cb_${phaseColor}`]}`}
        onClick={() => onToggle(item.id)}
        aria-label={isChecked ? 'Batalkan' : 'Tandai selesai'}
      >
        {isChecked && <svg viewBox="0 0 12 10" fill="none"><polyline points="1,5 4,9 11,1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </button>
      <div className={styles.checkContent}>
        <span className={styles.checkText}>{item.text}</span>
        {showNote ? (
          <div className={styles.noteArea}>
            <textarea
              className={styles.noteInput}
              placeholder="Tambahkan catatan temuan..."
              value={notes[item.id] || ''}
              onChange={e => onNoteChange(item.id, e.target.value)}
              rows={3}
              autoFocus
            />
            <button className={styles.noteClose} onClick={() => setShowNoteFor(null)}>Tutup</button>
          </div>
        ) : (
          <button
            className={`${styles.noteBtn} ${hasNote ? styles.noteBtnActive : ''}`}
            onClick={() => setShowNoteFor(showNote ? null : item.id)}
            title={hasNote ? 'Ada catatan — klik untuk edit' : 'Tambah catatan temuan'}
          >
            {hasNote ? '📝' : '+ Catatan'}
          </button>
        )}
        {hasNote && !showNote && (
          <div className={styles.notePreview}>{notes[item.id]}</div>
        )}
      </div>
    </div>
  )
}
