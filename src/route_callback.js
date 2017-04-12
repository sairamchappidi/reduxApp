/**
 * Created by amuru1 on 2/20/2017.
 */
import { store } from './index'
import { fetchPosts } from './actions/index';

export function onPostsEnter() {
    store.dispatch(fetchPosts());
}