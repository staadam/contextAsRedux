export const selectFromState = (selectedNames, state) => {
    const isArrayEmpty = selectedNames.length === 0;

    if(isArrayEmpty) return state;

    const selectedState = selectedNames.reduce((prevVal, currentVal, index, array)=>{
        const isFirstItem = index === 0; 

        if(isFirstItem) return {[currentVal]: state[currentVal]}

        return {
            ...prevVal,
            [currentVal]: state[currentVal]
        }
    },"just to skip :D")
    return selectedState;
}