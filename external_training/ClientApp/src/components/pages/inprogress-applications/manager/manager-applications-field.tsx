import {useState} from "react";
import {ModeSwitchButton} from "../../../current-applications-utils/mode-switch-button.tsx";
import {ManagerArchivedApplications} from "./manager-archived-applications.tsx";
import {ManagerPendingApplications} from "./manager-pending-applications.tsx";

export function ManagerApplicationsField() {
    const [historyMode, setHistoryMode] = useState(() => false);

    return (
        <div className={"mx-[55px] mt-[40px] font-medium"}>
            <ModeSwitchButton contentMode={historyMode}
                              setContentMode={setHistoryMode}
                              leftPartText={"Заявки в работе"}
                              rightPartText={"История"}/>
            {historyMode ?
                <ManagerArchivedApplications/> : <ManagerPendingApplications/>}
        </div>
    )
}