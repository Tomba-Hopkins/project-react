/* eslint-disable react/prop-types */
export default function Tab({no, tabAct, setTabAct}){
    return (
        <button onClick={() => setTabAct(no)} className={no === tabAct ? 'tab-act' : 'tab-not-act'}>
            Tab {no + 1}
        </button>
    )
}