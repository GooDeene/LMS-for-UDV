import {AdminBarTab} from "../navigation-utils.ts";

type NavigationTabIconProps = {
    variant: AdminBarTab;
}

export function NavigationTabIcon({variant}: NavigationTabIconProps): JSX.Element {
    switch (variant) {
        case AdminBarTab.Editing:
            return <NavigationTabEditingIcon />;
        case AdminBarTab.Coordination:
            return <NavigationTabCoordinationIcon />;
        case AdminBarTab.InProcess:
            return <NavigationTabInProcessIcon />;
        case AdminBarTab.AwaitingContract:
            return <NavigationTabAwaitingContractIcon />;
        case AdminBarTab.AwaitingPayment:
            return <NavigationTabAwaitingPaymentIcon />;
        case AdminBarTab.AwaitingLearning:
            return <NavigationTabAwaitingLearningIcon />;
        case AdminBarTab.LearningInProcess:
            return <NavigationTabLearningInProcessIcon />;
        case AdminBarTab.History:
            return <NavigationTabHistoryIcon />;
        default:
            return <></>;
    }
}

function NavigationTabEditingIcon(): JSX.Element {
    return <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M25.3177 3.18359L29.3177 7.18359L26.2683 10.2343L22.2683 6.23426L25.3177 3.18359ZM10.667 21.8343H14.667L24.383 12.1183L20.383 8.11826L10.667 17.8343V21.8343Z"
            fill="#2B2A29"/>
        <path
            d="M25.3333 25.8333H10.8773C10.8427 25.8333 10.8067 25.8467 10.772 25.8467C10.728 25.8467 10.684 25.8347 10.6387 25.8333H6.66667V7.16667H15.796L18.4627 4.5H6.66667C5.196 4.5 4 5.69467 4 7.16667V25.8333C4 27.3053 5.196 28.5 6.66667 28.5H25.3333C26.0406 28.5 26.7189 28.219 27.219 27.719C27.719 27.2189 28 26.5406 28 25.8333V14.276L25.3333 16.9427V25.8333Z"
            fill="#2B2A29"/>
    </svg>
}

function NavigationTabCoordinationIcon(): JSX.Element {
    return <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M22.9423 11.4439L21.057 9.55859L14.6663 15.9493L11.609 12.8919L9.72363 14.7773L14.6663 19.7199L22.9423 11.4439Z"
                fill="#2B2A29"/>
            <path
                d="M26.667 3.16797H5.33366C3.86299 3.16797 2.66699 4.36397 2.66699 5.83464V29.8346L9.77766 24.5013H26.667C28.1377 24.5013 29.3337 23.3053 29.3337 21.8346V5.83464C29.3337 4.36397 28.1377 3.16797 26.667 3.16797ZM26.667 21.8346H8.88966L5.33366 24.5013V5.83464H26.667V21.8346Z"
                fill="#2B2A29"/>
        </svg>
}

function NavigationTabInProcessIcon(): JSX.Element {
    return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M17.736 0.905337C17.8296 0.761023 17.9658 0.646587 18.1272 0.576491C18.2887 0.506395 18.4681 0.483785 18.6429 0.511519L23.2512 1.24928C23.4855 1.28678 23.6948 1.41199 23.8329 1.59741C23.971 1.78283 24.0268 2.01328 23.9879 2.23813L23.2208 6.66127C23.1915 6.82893 23.1111 6.98451 22.9897 7.10834C22.8683 7.23217 22.7113 7.3187 22.5387 7.35698C22.366 7.39526 22.1854 7.38358 22.0197 7.32342C21.854 7.26326 21.7106 7.15731 21.6076 7.01897L20.3637 5.35083L13.9576 9.27869C13.6844 9.44641 13.3572 9.51372 13.0364 9.46821C12.7155 9.4227 12.4227 9.26744 12.2118 9.03105L8.63948 5.02408L1.95916 8.31736C1.64208 8.4738 1.27321 8.50299 0.933711 8.3985C0.594206 8.294 0.311872 8.06439 0.148817 7.76017C-0.0142372 7.45595 -0.0446552 7.10205 0.0642551 6.77631C0.173165 6.45057 0.412482 6.17969 0.729559 6.02325L8.35628 2.2622C8.62554 2.12948 8.93361 2.08784 9.2306 2.14402C9.5276 2.2002 9.79614 2.35091 9.99275 2.57175L13.4951 6.50133L18.8007 3.24761L17.7664 1.85979C17.6636 1.72139 17.6059 1.55687 17.6004 1.38699C17.595 1.21712 17.6422 1.04951 17.736 0.905337ZM6.00284 9.3492L0.801256 12.2039C0.595767 12.3166 0.424905 12.4792 0.305938 12.6755C0.186971 12.8718 0.124116 13.0947 0.123724 13.3218V23.2102C0.123724 23.9222 0.725974 24.5 1.46803 24.5H6.00284V9.3492ZM8.24336 24.5H14.8179V12.7852L11.8622 14.2023L8.90834 9.24258C8.75917 8.99035 8.52543 8.79397 8.24515 8.68538L8.24336 24.5ZM22.0808 24.5H17.0584V11.7104L21.4803 9.58824C21.6853 9.49007 21.913 9.44378 22.1418 9.45376C22.3707 9.46373 22.593 9.52965 22.7879 9.64525C22.9827 9.76085 23.1435 9.9223 23.255 10.1143C23.3665 10.3063 23.4251 10.5224 23.4251 10.7422V23.2102C23.4251 23.5523 23.2835 23.8803 23.0314 24.1222C22.7793 24.3641 22.4373 24.5 22.0808 24.5Z"
              fill="#2B2A29"/>
    </svg>


}

function NavigationTabAwaitingContractIcon(): JSX.Element {
    return <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M26.537 11.9493C26.4738 11.8046 26.3853 11.6723 26.2757 11.5586L18.2757 3.55864C18.162 3.44901 18.0297 3.36052 17.885 3.2973C17.845 3.27864 17.8023 3.26797 17.7597 3.2533C17.6481 3.21534 17.532 3.19247 17.4143 3.1853C17.3863 3.18264 17.361 3.16797 17.333 3.16797H7.99967C6.52901 3.16797 5.33301 4.36397 5.33301 5.83464V27.168C5.33301 28.6386 6.52901 29.8346 7.99967 29.8346H23.9997C25.4703 29.8346 26.6663 28.6386 26.6663 27.168V12.5013C26.6663 12.4733 26.6517 12.448 26.649 12.4186C26.6425 12.3009 26.6196 12.1847 26.581 12.0733C26.5677 12.0306 26.5557 11.9893 26.537 11.9493ZM22.1143 11.168H18.6663V7.71997L22.1143 11.168ZM7.99967 27.168V5.83464H15.9997V12.5013C15.9997 12.8549 16.1402 13.1941 16.3902 13.4441C16.6402 13.6942 16.9794 13.8346 17.333 13.8346H23.9997L24.0023 27.168H7.99967Z"
            fill="#2B2A29"/>
        <path
            d="M10.667 16.5013H21.3337V19.168H10.667V16.5013ZM10.667 21.8346H21.3337V24.5013H10.667V21.8346ZM10.667 11.168H13.3337V13.8346H10.667V11.168Z"
            fill="#2B2A29"/>
    </svg>

}

function NavigationTabAwaitingPaymentIcon(): JSX.Element {
    return <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M14.0003 0.5C7.37366 0.5 0.666992 2.56133 0.666992 6.5V11.8333C0.666992 15.772 7.37366 17.8333 14.0003 17.8333C20.627 17.8333 27.3337 15.772 27.3337 11.8333V6.5C27.3337 2.56133 20.627 0.5 14.0003 0.5ZM3.33366 11.8333V10.2373C4.17812 10.7156 5.07232 11.1001 6.00033 11.384V13.892C4.25099 13.2067 3.33366 12.3907 3.33366 11.8333ZM19.3337 12.0307V14.6587C18.1777 14.8973 16.8443 15.072 15.3337 15.136V12.4693C16.6755 12.4159 18.0121 12.2693 19.3337 12.0307ZM12.667 15.1373C11.323 15.0859 9.98535 14.9262 8.66699 14.66V12.032C9.94566 12.264 11.2963 12.4147 12.667 12.472V15.1373ZM22.0003 13.892V11.384C22.9286 11.1007 23.8228 10.7161 24.667 10.2373V11.8333C24.667 12.3907 23.751 13.2067 22.0003 13.892ZM14.0003 9.83333C7.09766 9.83333 3.33366 7.632 3.33366 6.5C3.33366 5.368 7.09766 3.16667 14.0003 3.16667C20.903 3.16667 24.667 5.368 24.667 6.5C24.667 7.632 20.903 9.83333 14.0003 9.83333Z"
            fill="#2B2A29"/>
    </svg>
}

function NavigationTabAwaitingLearningIcon(): JSX.Element {
    return <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.66699 5.83464C6.66699 5.12739 6.94794 4.44911 7.44804 3.94902C7.94814 3.44892 8.62641 3.16797 9.33366 3.16797H22.667C23.3742 3.16797 24.0525 3.44892 24.5526 3.94902C25.0527 4.44911 25.3337 5.12739 25.3337 5.83464V7.16797C25.3337 9.0893 24.5217 11.1466 23.467 12.9226C22.6934 14.2205 21.7682 15.4218 20.711 16.5013C21.7673 17.5809 22.6915 18.7822 23.4643 20.08C24.5217 21.856 25.3337 23.9146 25.3337 25.8346V27.168C25.3337 27.8752 25.0527 28.5535 24.5526 29.0536C24.0525 29.5537 23.3742 29.8346 22.667 29.8346H9.33366C8.62641 29.8346 7.94814 29.5537 7.44804 29.0536C6.94794 28.5535 6.66699 27.8752 6.66699 27.168V25.8346C6.66699 23.9133 7.47899 21.856 8.53366 20.08C9.30726 18.7821 10.2324 17.5808 11.2897 16.5013C10.2817 15.4786 9.31633 14.2346 8.53633 12.9226C7.47899 11.1466 6.66699 9.08797 6.66699 7.16797V5.83464Z"
            fill="#2B2A29"/>
    </svg>

}

function NavigationTabLearningInProcessIcon(): JSX.Element {
    return <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M31.1582 5.68319L16.3891 0.565663C16.1364 0.478112 15.8633 0.478112 15.6106 0.565663L0.841531 5.68319C0.596464 5.76812 0.383315 5.93105 0.23228 6.1489C0.0812449 6.36675 -1.91418e-05 6.62848 3.38206e-09 6.89701V19.6908C3.38206e-09 20.0302 0.129669 20.3556 0.360481 20.5955C0.591293 20.8354 0.904341 20.9702 1.23076 20.9702C1.55718 20.9702 1.87022 20.8354 2.10104 20.5955C2.33185 20.3556 2.46152 20.0302 2.46152 19.6908V8.67215L7.62916 10.4617C6.25619 12.7675 5.81959 15.5454 6.41523 18.1855C7.01087 20.8256 8.59006 23.1121 10.8061 24.5429C8.03685 25.672 5.64303 27.7142 3.89227 30.5064C3.80122 30.6471 3.73798 30.8052 3.70622 30.9715C3.67445 31.1378 3.67481 31.309 3.70726 31.4752C3.73971 31.6413 3.80362 31.7991 3.89525 31.9394C3.98689 32.0797 4.10443 32.1996 4.24104 32.2922C4.37766 32.3848 4.53063 32.4483 4.69105 32.4789C4.85147 32.5096 5.01615 32.5068 5.17552 32.4707C5.33488 32.4345 5.48576 32.3659 5.61936 32.2686C5.75297 32.1714 5.86665 32.0475 5.95379 31.9041C8.27224 28.2067 11.9337 26.0878 15.9999 26.0878C20.066 26.0878 23.7275 28.2067 26.0459 31.9041C26.2264 32.183 26.5053 32.3769 26.8222 32.4438C27.1391 32.5106 27.4686 32.4452 27.7394 32.2615C28.0103 32.0779 28.2007 31.7908 28.2696 31.4624C28.3385 31.134 28.2802 30.7906 28.1075 30.5064C26.3567 27.7142 23.9536 25.672 21.1937 24.5429C23.4075 23.1121 24.9852 20.8271 25.5808 18.189C26.1763 15.5508 25.7411 12.7748 24.3706 10.4697L31.1582 8.11882C31.4033 8.03395 31.6165 7.87104 31.7676 7.65318C31.9187 7.43533 32 7.17357 32 6.90501C32 6.63644 31.9187 6.37468 31.7676 6.15683C31.6165 5.93897 31.4033 5.77606 31.1582 5.69119V5.68319ZM23.3844 15.8527C23.3847 17.0663 23.1083 18.2626 22.5777 19.3437C22.0471 20.4247 21.2775 21.3595 20.332 22.0714C19.3866 22.7834 18.2922 23.2522 17.1387 23.4393C15.9852 23.6265 14.8055 23.5267 13.6963 23.1481C12.5871 22.7695 11.58 22.123 10.7577 21.2615C9.93547 20.4 9.32141 19.3481 8.96594 18.1921C8.61047 17.0362 8.52373 15.8091 8.71282 14.6115C8.90192 13.414 9.36147 12.2801 10.0538 11.3029L15.6106 13.222C15.8633 13.3095 16.1364 13.3095 16.3891 13.222L21.946 11.3029C22.881 12.6206 23.3852 14.2152 23.3844 15.8527ZM15.9999 10.6664L5.12303 6.89701L15.9999 3.12763L26.8767 6.89701L15.9999 10.6664Z"
            fill="#2B2A29"/>
    </svg>
}

function NavigationTabHistoryIcon(): JSX.Element {
    return <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 11.168V17.8346H22.6667V15.168H18.6667V11.168H16Z" fill="#2B2A29"/>
        <path
            d="M28.3897 11.8288C27.7882 10.4022 26.9151 9.1062 25.819 8.01285C24.1597 6.3536 22.0506 5.21698 19.7523 4.74351C18.1571 4.41883 16.5129 4.41883 14.9177 4.74351C12.6172 5.21396 10.5063 6.35151 8.84833 8.01418C7.75484 9.1087 6.8821 10.4033 6.27766 11.8275C5.65247 13.3057 5.33142 14.8946 5.33366 16.4995L5.33499 16.5328H2.66699L6.66699 21.8328L10.667 16.5328H8.00166L8.00033 16.4995C7.99649 14.64 8.55161 12.8223 9.59366 11.2822C10.2658 10.2884 11.1216 9.4322 12.115 8.75951C13.1256 8.07872 14.2592 7.60138 15.4523 7.35418C17.877 6.85565 20.4005 7.34035 22.4679 8.70174C24.5354 10.0631 25.9777 12.1898 26.4777 14.6142C26.7292 15.8567 26.7292 17.137 26.4777 18.3795C26.2337 19.5737 25.7561 20.7079 25.0723 21.7168C24.739 22.2115 24.3563 22.6768 23.9337 23.0982C23.0819 23.9489 22.0748 24.6283 20.967 25.0995C20.4028 25.338 19.8164 25.5202 19.2163 25.6435C17.9742 25.8948 16.6944 25.8948 15.4523 25.6435C14.2594 25.3989 13.1263 24.9219 12.1177 24.2395C11.6216 23.9043 11.1586 23.5226 10.735 23.0995L8.84966 24.9848C9.96316 26.0999 11.2857 26.9843 12.7415 27.5874C14.1973 28.1905 15.7579 28.5004 17.3337 28.4995C18.9377 28.4989 20.5256 28.1784 22.0043 27.5568C24.1478 26.65 25.9817 25.1399 27.283 23.2102C28.6223 21.2287 29.3366 18.8911 29.3337 16.4995C29.337 14.8949 29.0159 13.3062 28.3897 11.8288Z"
            fill="#2B2A29"/>
    </svg>
}