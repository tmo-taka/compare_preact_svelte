import { TestN4 } from './TestN4.tsx'

export const TestN3 = (props) => {
    return (
        <div>
            テスト3
            <TestN4 value={props.value} />
        </div>
    )
}
