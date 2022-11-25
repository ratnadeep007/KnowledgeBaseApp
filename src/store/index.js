import create from 'zustand';

export default useStore = create((set) => ({
    tags: [],
    setTags: (tags) => set((_state) => ({ tags }))
}));
