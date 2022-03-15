

export const handleStateById = (e, func) => {
    func(original => ({
        ...original,
        [e.target.id] : e.target.value}))
}
