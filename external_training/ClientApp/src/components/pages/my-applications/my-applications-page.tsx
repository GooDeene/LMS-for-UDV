import {useContext, useState} from "react";
import clsx from "clsx";
import {PlusIcon} from "../../current-applications-utils/icons/plus-icon.tsx";
import {ApplicationStatus} from "../../current-applications-utils/application-status.ts";
import {ModeSwitchButton} from "../../current-applications-utils/mode-switch-button.tsx";
import {Modal, ModalContext} from "../../common/Modal.tsx";
import {CreateApplicationPage} from "../create-application/CreateApplicationPage.tsx";
import {Header} from "../../header/header.tsx";
import {UserApplications} from "../../user-applications/user-applications.tsx";
import ArchivedApplications from "../../archived-applications/archived-applications.tsx";


export const ApplicationsStatusToData = new Map<ApplicationStatus, string>([
    [ApplicationStatus.Approved, "Approved"],
    [ApplicationStatus.NotApproved, "NotApproved"],
    [ApplicationStatus.AwaitingManagerApproval, "AwaitingManagerApproval"],
    [ApplicationStatus.CourseSelection, "CourseSelection"],
    [ApplicationStatus.AwaitingPayment, "AwaitingPayment"],
    [ApplicationStatus.AwaitingContractAndPayment, "AwaitingContractAndPayment"],
    [ApplicationStatus.AwaitingContract, "AwaitingContract"]
]);

export type CurrentApplicationType = {
    id: number,
    title: string,
    date: Date,
    status: ApplicationStatus,
    comments_count: number
}

export function MyApplicationsPage(): JSX.Element {
    const [historyMode, setHistoryMode] = useState(false);
    const newApplicationButtonStyle = clsx(
        "flex items-center py-[15px] px-[28px] border-[#F59D0E]",
        "bg-[#FFCE80] border-2 rounded-full font-semibold active:bg-[#C27800]",
        "hover:border-[#C27800] hover:drop-shadow-lg transition-colors");

    const {modal, open, close} = useContext(ModalContext)

    return (
        <div>
            {modal &&
                <Modal onClose={close}>
                    <CreateApplicationPage onSubmit={close}/>
                </Modal>}

            <Header/>
            <div className={"mx-[55px] mt-[40px] flex font-medium items-center justify-between"}>
                <ModeSwitchButton contentMode={historyMode}
                                  setContentMode={setHistoryMode}
                                  leftPartText={"Текущие заявки"}
                                  rightPartText={"История"}/>
                <button
                    className={newApplicationButtonStyle}
                    onClick={open}>
                    <PlusIcon className='mr-4'/>
                    Новая заявка
                </button>
            </div>
            {historyMode ? <ArchivedApplications/> : <UserApplications/>}

        </div>
    )
}