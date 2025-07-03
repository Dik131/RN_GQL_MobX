import { makeAutoObservable } from 'mobx';
import { User, Post } from '../types';

export class UserStore {
  users: User[] = [];
  currentUser: User | null = null;
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUsers(users: User[]) {
    this.users = users;
  }

  setCurrentUser(user: User | null) {
    this.currentUser = user;
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  setError(error: string | null) {
    this.error = error;
  }
}

export class PostStore {
  posts: Post[] = [];
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setPosts(posts: Post[]) {
    this.posts = posts;
  }

  addPost(post: Post) {
    this.posts.unshift(post);
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  setError(error: string | null) {
    this.error = error;
  }

  get postsCount() {
    return this.posts.length;
  }
}

export class RootStore {
  userStore: UserStore;
  postStore: PostStore;

  constructor() {
    this.userStore = new UserStore();
    this.postStore = new PostStore();
  }
}

export const rootStore = new RootStore();
