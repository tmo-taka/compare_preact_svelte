import { TestN2 } from './TestN2.tsx'

export const TestN1 = (props) => {
    return (
        <div>
            テスト1
            <TestN2 value={props.value}/>
        </div>
    )
}
