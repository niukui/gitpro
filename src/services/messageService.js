import {get, put, post, del} from './../utils/api';

export async function findMessages(username) {
    // simulate an asynchronous operation
    return get(`Messages?username=${encodeURIComponent(username)}`);
}

export async function getMessage(id) {
    // simulate an asynchronous operation
    return get(`Message?id=${encodeURIComponent(id)}`);
}

export async function createMessage(from, to, body) {
    // simulate an asynchronous operation
    return put(`Message?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&body=${encodeURIComponent(body)}`);
}

export async function delMessages(ids) {
    // simulate an asynchronous operation
    return del(`Messages?ids=${encodeURIComponent(ids)}`);
}
