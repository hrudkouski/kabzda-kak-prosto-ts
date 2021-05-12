import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed should be true', () => {
        // data
        const state: StateType = {
            collapsed: false
        }

        //action
        const newState = reducer(state, {type: TOGGLE_COLLAPSED})

        //expectation
        expect(newState.collapsed).toBeTruthy();
        expect(state.collapsed).toBeFalsy();
        expect(() => {
            reducer(state, {type: "FAKE_TYPE"})
        }).toThrowError()
    }
)