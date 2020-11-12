

export const subtractUse = (obj, setMethod) => {
    obj.Ability.uses -= 1;
    setMethod([obj]);
}