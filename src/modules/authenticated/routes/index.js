import {
  HomeScreen,
  BookDetailScreen,
  FavoriteScreen,
  SearchScreen,
  AuthorDetailScreen
} from '../screens'

export const authRoutes = [
  {
    path: '/home',
    element: <HomeScreen />
  },
  {
    path: '/book-detail/:id',
    element: <BookDetailScreen />
  },
  {
    path: '/favorites',
    element: <FavoriteScreen />
  },
  {
    path: '/search',
    element: <SearchScreen />
  },
  {
    path: '/author-detail/:id',
    element: <AuthorDetailScreen />
  }
]
