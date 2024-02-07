import { TestN8 } from './TestN8.tsx'

export const TestN7 = (props) => {
    return (
        <div>
            テスト7
            <TestN8 value={props.value}/>
        </div>
    )
}
