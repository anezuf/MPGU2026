import Tabs from '../ui/Tabs'

const SUBJECT_TABS = [
  { id: 'social-studies', label: 'Обществознание' },
  { id: 'orkse', label: 'ОРКСЭ' },
  { id: 'history', label: 'История' },
  { id: 'russian-language', label: 'Русский язык и литература' },
]

function BlockSubjects({ activeTab, onTabChange }) {
  return (
    <section id="subject-resources" className="hub-section">
      <h2 className="hub-section__title">
        <span className="section-number">04 —</span> Предметные копилки
      </h2>
      <Tabs tabs={SUBJECT_TABS} activeTab={activeTab} onTabChange={onTabChange}>
        <div className="hub-section__content hub-section__content--dashed" />
      </Tabs>
    </section>
  )
}

export default BlockSubjects
