import { TestN6 } from './TestN6.tsx'

export const TestN5 = (props) => {
    return (
        <div>
            テスト5
            <TestN6 value={props.value}/>
        </div>
    )
}
