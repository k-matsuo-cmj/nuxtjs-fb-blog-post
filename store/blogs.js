import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore'

export const state = () => ({
  blogs: [],
  search: false,
  searchWord: ''
})

export const getters = {
  blogs: state =>
    state.blogs.filter(blog => !state.searchWord ||
        blog.title.includes(state.searchWord) ||
        blog.content.includes(state.searchWord)
    )
}

export const mutations = {
  setBlogs (state, blogs) {
    state.blogs = blogs
  },
  setSearch (state, flag) {
    state.search = flag
  },
  setSearchWord (state, word) {
    state.searchWord = word
  }
}

export const actions = {
  init ({ commit }) {
    const collectionRef = collection(this.$db, 'blogs')
    const q = query(collectionRef, orderBy('created_at', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      commit('setBlogs', querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      }))
    })
  },
  add (_, blog) {
    const collectionRef = collection(this.$db, 'blogs')
    addDoc(collectionRef, blog)
  },
  async remove (_, id) {
    const documentRef = doc(this.$db, 'blogs', id)
    await deleteDoc(documentRef)
  },
  showSearchBox ({ commit }) {
    commit('setSearch', true)
  },
  doSearch ({ commit }, word) {
    commit('setSearchWord', word)
  },
  closeSearchBox ({ commit }) {
    commit('setSearch', false)
    commit('setSearchWord', '')
  }
}
