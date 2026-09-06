import { create } from 'zustand';
import { produce } from 'immer';

/**
 * State: {
 *  activeSet: StudySet | null
 *  studySets: List<StudySet>
 * }
 * 
 * StudySet: {
 *  name: String
 *  id: number
 *  cards: List<Card>
 *  LOs: List<LearningObjective>
 * }
 * 
 * Card: {
 *  value: String
 *  LO: LearningObjective
 *  rowID: number
 * }
 * 
 * LearningObjective: {
 *  rowID: number
 *  value: String
 * }
 */

export const useStudySetStore = create( (set) => ({
    activeSet: null,
    studySets: [],
    addSet: (studySet) => set( () => ({studySets: [studySet, ...studySets]}) ),
    selectSet: (studySet) => set( () => ({activeSet: studySet}) ),
    removeSet: (toRemove) => set( () => ({studySets: studySets.filter( (studySet) => studySet.id !== toRemove.id )}) ),
}) 
);