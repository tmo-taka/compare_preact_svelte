import { TestN3 } from './TestN3.tsx'

export const TestN2 = (props) => {
    return (
        <div>
            テスト2
            <TestN3 value={props.value} />
        </div>
    )
}
