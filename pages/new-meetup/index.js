import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetups = () => {
    const addMeetUp = enteredMeetData => {
        console.log(enteredMeetData);
    };

    return <NewMeetupForm onAddMeetup={addMeetUp} />;
};

export default NewMeetups;
