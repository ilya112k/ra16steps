import {CloseButton, Table} from "react-bootstrap";
import {TableComponentProps} from "./table.component.props.tsx";

export function TableComponent({ trainingList, deleteAction }: TableComponentProps) {
    return (
        <Table striped hover variant="dark" size='sm' responsive>
            <thead>
            <tr>
                <th>Дата (ДД.ММ.ГГ)</th>
                <th>Пройдено км</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            {trainingList.map((el) => (
                <tr key={el.date.getTime()}>
                    <td>{el.date.toLocaleDateString()}</td>
                    <td>{el.duration}</td>
                    <td><CloseButton variant='white'  aria-label="Hide" onClick={() => deleteAction(el)} /></td>
                </tr>
            ))}
            </tbody>
        </Table>
    )
}