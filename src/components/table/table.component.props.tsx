import {ITraining} from "../../interfaces/ITraining.tsx";

export interface TableComponentProps {
    trainingList: ITraining[];
    deleteAction: (el: ITraining) => void;
}