import {FormComponentProps} from "./form.component.props.tsx";
import {Button, Form} from "react-bootstrap";

export function FormComponent({ submitAction }: FormComponentProps) {
    return (
        <Form
            onSubmit={submitAction}
            className='m-4'
            name='form'
            style={{display: 'flex', justifyContent: 'space-between', width: '70%'}}
        >
            <Form.Group className="mb-1" controlId="formBasicDate">
                <Form.Label>Дата (ДД.ММ.ГГ)</Form.Label>
                <Form.Control name='date' type='date' pattern='\d{2}\.\d{2}\.\d{4}' required></Form.Control>
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicDuration">
                <Form.Label>Пройдено км</Form.Label>
                <Form.Control  name='duration' type='number' pattern='\d+' required></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-1" style={{height: '100%', alignSelf: 'flex-end'}}>
                OK
            </Button>
        </Form>
    )
}