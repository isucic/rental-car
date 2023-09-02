const { default: ReservationSteps } = require("../components/reservationSteps")

const ReservationLayout = ({children}) => {
    return (
        <>
            <ReservationSteps />
            {children}
        </>
    )
}

export default ReservationLayout