import { TestN5 } from './TestN5.tsx'

export const TestN4 = (props) => {
    return (
        <div>
            テスト4
            <TestN5 value={props.value}/>
        </div>
    )
}
