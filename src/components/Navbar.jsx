// extra components
import HideableColumn from './HideableColumn';

// pages for changeView
import FlashCardPage from '../pages/FlashCardPage';
import StudyGuidePage from '../pages/StudyGuidePage';
import HomePage from '../pages/HomePage';
import PageNotFound from '../pages/PageNotFound';

// needed to get state values
import { useStudySetStore } from '../stores/StudySetStore';

import Stack from 'react-bootstrap/Stack';
import { useEffect } from 'react';

export default function Navbar ({changeView}) {
    const activeSet = useStudySetStore( (state) => state.activeSet );

    // need to update the main "window" of the application
    useEffect(() => {
        if(activeSet === null) changeView(HomePage);
        else changeView(StudyGuidePage);
    }, activeSet);

    const activateLink = (newView) => {
        return () => {
            this.classList.toggle("active");
            changeView(newView);
        }
    }

    return (
        <Stack direction="horizontal" gap={5}>
            <HideableColumn title={"Study Sets"}>
                <SearchableList view={StudySetList} />
            </HideableColumn>
            {
                activeSet !== null &&
                <Stack direction="horizontal" gap={1}>
                    <h2 className="link" onClick={activateLink(PageNotFound)}>File</h2>
                    <h2 className="link" onClick={activateLink(FlashCardPage)}>Flash Cards</h2>
                    <h2 className="link" onClick={activateLink(PageNotFound)}>Quiz</h2>
                </Stack>
            }
        </Stack>
    );
}