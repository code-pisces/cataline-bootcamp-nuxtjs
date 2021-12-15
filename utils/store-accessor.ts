import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Books from '@/store/books'
import Authentication from '@/store/auth'

let books: Books
let auth: Authentication

function initializeStores(store: Store<any>): void {
  books = getModule(Books , store)
  auth = getModule(Authentication, store)
}

export { initializeStores, books, auth }
