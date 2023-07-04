import CallToAction from "./Call-To-Action";

function Welcome() {

    return (
        <div className="welcome">
            <div className="title-welcome">
                <h1>My Tinerary</h1>
                <h4>Find your perfect trip, designed by insiders who know and love their cities</h4>
                <CallToAction />
            </div>
        </div>
    );
}

export default Welcome;