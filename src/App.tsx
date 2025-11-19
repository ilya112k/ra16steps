import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {ITraining} from "./interfaces/ITraining.tsx";
import {TableComponent} from "./components/table/table.component.tsx";
import {FormComponent} from "./components/form/form.component.tsx";

import './App.css'

function App() {
  const [trainingList, setTrainingList] = useState<ITraining[]>([])

  const addAction = (data: ITraining) => {
      trainingList.push(data);
      const sortedTrainingList =  trainingList.sort((el1, el2) => el2.date.getTime() - el1.date.getTime())
      setTrainingList([...sortedTrainingList])
  }

  const changeAction = (data: ITraining) => {
      const correctTrainingList = trainingList.map(el => el.date.getTime() === data.date.getTime() ? {date: data.date, duration: data.duration + el.duration} : el);
      const sortedTrainingList = correctTrainingList.sort((el1, el2) => el2.date.getTime() - el1.date.getTime())
      setTrainingList([...sortedTrainingList]);
  }

  const deleteAction = (data: ITraining) => {
      const correctTrainingList = trainingList.filter(el => el.date !== data.date);
      const sortedTrainingList = correctTrainingList.sort((el1, el2) => el2.date.getTime() - el1.date.getTime())
      setTrainingList([...sortedTrainingList]);
  }


  const onSubmit = (e: React.BaseSyntheticEvent) => {

    e.preventDefault();
    const formData = new FormData(e.target)
    const date = formData.get('date') as unknown as Date;
    const duration = formData.get('duration') as unknown as number;

    const training: ITraining = {
      date: new Date(date),
      duration: duration
    }

    if(trainingList.findIndex(el => el.date.getTime() === training.date.getTime()) === -1) {
      addAction(training)
    } else {
      changeAction(training);
    }
    e.target.reset()
  }

  return (
    <>
        <FormComponent submitAction={onSubmit}></FormComponent>
        <TableComponent  trainingList={trainingList} deleteAction={deleteAction}></TableComponent>
   </>
  )
}

export default App
