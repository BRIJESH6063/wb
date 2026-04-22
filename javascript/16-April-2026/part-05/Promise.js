/*
const promise = fetch('https://api.github.com/users') ;
console.log(promise) ;
---->>> Promise { <pending> }

Promise [ Object ] -- 3 states
1. --->> pending
2. --->> fulfilled
3. --->> rejected

---------------------------------------------------------
| consume promise when either 'FULFILLED' or 'REJECTED'. |
---------------------------------------------------------
Response {
  status: 200,
  statusText: 'OK',
  headers: Headers {
    date: 'Mon, 20 Apr 2026 16:38:33 GMT',
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'public, max-age=60, s-maxage=60',
    vary: 'Accept,Accept-Encoding, Accept, X-Requested-With',
    etag: 'W/"63129c3249a42a5f1e9bf4c6e41fa48b9f4306e3e5898c526eeb8dba3d6449f5"',
    'x-github-media-type': 'github.v3; format=json',
    link: '<https://api.github.com/users?since=46>; rel="next", <https://api.github.com/users{?since}>; rel="first"',
    'x-github-api-version-selected': '2022-11-28',
    'access-control-expose-headers': 'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset',
    'access-control-allow-origin': '*',
    'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
    'x-frame-options': 'deny',
    'x-content-type-options': 'nosniff',
    'x-xss-protection': '0',
    'referrer-policy': 'origin-when-cross-origin, strict-origin-when-cross-origin',
    'content-security-policy': "default-src 'none'",
    'content-encoding': 'gzip',
    server: 'github.com',
    'accept-ranges': 'bytes',
    'x-ratelimit-limit': '60',
    'x-ratelimit-remaining': '59',
    'x-ratelimit-used': '1',
    'x-ratelimit-resource': 'core',
    'x-ratelimit-reset': '1776706713',
    'transfer-encoding': 'chunked',
    'x-github-request-id': 'F699:1D177C:309E2:36168:69E65689'
  },
  body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
  bodyUsed: false,
  ok: true,
  redirected: false,
  type: 'basic',
  url: 'https://api.github.com/users'
}
------------------------------------------------------------
body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true } = byte
------------- CONVERT INTO JSON (response.json) 'asynchronous' task -----------------


const promise = fetch('https://api.github.com/users') ;
promise.then((response) => {
  console.log(response.json()) ;
}) ;
---->>> Promise { <pending> }
------------ again PROMISE(pending) ----------------------------
const promise = fetch('https://api.github.com/users') ;
const promise2 = promise.then((response) => {
  return response.json() ;
}) ;

// console.log(promise2) ;
// consume only after promise is 'FULFILLED' or 'REJECTED'

promise2.then((response) => {
  console.log(response) ;
})

*/

/*
[
  {
    login: 'mojombo',
    id: 1,
    node_id: 'MDQ6VXNlcjE=',
    avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/mojombo',
    html_url: 'https://github.com/mojombo',
    followers_url: 'https://api.github.com/users/mojombo/followers',
    following_url: 'https://api.github.com/users/mojombo/following{/other_user}',
    gists_url: 'https://api.github.com/users/mojombo/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/mojombo/subscriptions',
    organizations_url: 'https://api.github.com/users/mojombo/orgs',
    repos_url: 'https://api.github.com/users/mojombo/repos',
    events_url: 'https://api.github.com/users/mojombo/events{/privacy}',
    received_events_url: 'https://api.github.com/users/mojombo/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'defunkt',
    id: 2,
    node_id: 'MDQ6VXNlcjI=',
    avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/defunkt',
    html_url: 'https://github.com/defunkt',
    followers_url: 'https://api.github.com/users/defunkt/followers',
    following_url: 'https://api.github.com/users/defunkt/following{/other_user}',
    gists_url: 'https://api.github.com/users/defunkt/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/defunkt/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/defunkt/subscriptions',
    organizations_url: 'https://api.github.com/users/defunkt/orgs',
    repos_url: 'https://api.github.com/users/defunkt/repos',
    events_url: 'https://api.github.com/users/defunkt/events{/privacy}',
    received_events_url: 'https://api.github.com/users/defunkt/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'pjhyett',
    id: 3,
    node_id: 'MDQ6VXNlcjM=',
    avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/pjhyett',
    html_url: 'https://github.com/pjhyett',
    followers_url: 'https://api.github.com/users/pjhyett/followers',
    following_url: 'https://api.github.com/users/pjhyett/following{/other_user}',
    gists_url: 'https://api.github.com/users/pjhyett/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/pjhyett/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/pjhyett/subscriptions',
    organizations_url: 'https://api.github.com/users/pjhyett/orgs',
    repos_url: 'https://api.github.com/users/pjhyett/repos',
    events_url: 'https://api.github.com/users/pjhyett/events{/privacy}',
    received_events_url: 'https://api.github.com/users/pjhyett/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'wycats',
    id: 4,
    node_id: 'MDQ6VXNlcjQ=',
    avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/wycats',
    html_url: 'https://github.com/wycats',
    followers_url: 'https://api.github.com/users/wycats/followers',
    following_url: 'https://api.github.com/users/wycats/following{/other_user}',
    gists_url: 'https://api.github.com/users/wycats/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/wycats/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/wycats/subscriptions',
    organizations_url: 'https://api.github.com/users/wycats/orgs',
    repos_url: 'https://api.github.com/users/wycats/repos',
    events_url: 'https://api.github.com/users/wycats/events{/privacy}',
    received_events_url: 'https://api.github.com/users/wycats/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'ezmobius',
    id: 5,
    node_id: 'MDQ6VXNlcjU=',
    avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/ezmobius',
    html_url: 'https://github.com/ezmobius',
    followers_url: 'https://api.github.com/users/ezmobius/followers',
    following_url: 'https://api.github.com/users/ezmobius/following{/other_user}',
    gists_url: 'https://api.github.com/users/ezmobius/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/ezmobius/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/ezmobius/subscriptions',
    organizations_url: 'https://api.github.com/users/ezmobius/orgs',
    repos_url: 'https://api.github.com/users/ezmobius/repos',
    events_url: 'https://api.github.com/users/ezmobius/events{/privacy}',
    received_events_url: 'https://api.github.com/users/ezmobius/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'ivey',
    id: 6,
    node_id: 'MDQ6VXNlcjY=',
    avatar_url: 'https://avatars.githubusercontent.com/u/6?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/ivey',
    html_url: 'https://github.com/ivey',
    followers_url: 'https://api.github.com/users/ivey/followers',
    following_url: 'https://api.github.com/users/ivey/following{/other_user}',
    gists_url: 'https://api.github.com/users/ivey/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/ivey/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/ivey/subscriptions',
    organizations_url: 'https://api.github.com/users/ivey/orgs',
    repos_url: 'https://api.github.com/users/ivey/repos',
    events_url: 'https://api.github.com/users/ivey/events{/privacy}',
    received_events_url: 'https://api.github.com/users/ivey/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'evanphx',
    id: 7,
    node_id: 'MDQ6VXNlcjc=',
    avatar_url: 'https://avatars.githubusercontent.com/u/7?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/evanphx',
    html_url: 'https://github.com/evanphx',
    followers_url: 'https://api.github.com/users/evanphx/followers',
    following_url: 'https://api.github.com/users/evanphx/following{/other_user}',
    gists_url: 'https://api.github.com/users/evanphx/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/evanphx/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/evanphx/subscriptions',
    organizations_url: 'https://api.github.com/users/evanphx/orgs',
    repos_url: 'https://api.github.com/users/evanphx/repos',
    events_url: 'https://api.github.com/users/evanphx/events{/privacy}',
    received_events_url: 'https://api.github.com/users/evanphx/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'vanpelt',
    id: 17,
    node_id: 'MDQ6VXNlcjE3',
    avatar_url: 'https://avatars.githubusercontent.com/u/17?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/vanpelt',
    html_url: 'https://github.com/vanpelt',
    followers_url: 'https://api.github.com/users/vanpelt/followers',
    following_url: 'https://api.github.com/users/vanpelt/following{/other_user}',
    gists_url: 'https://api.github.com/users/vanpelt/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/vanpelt/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/vanpelt/subscriptions',
    organizations_url: 'https://api.github.com/users/vanpelt/orgs',
    repos_url: 'https://api.github.com/users/vanpelt/repos',
    events_url: 'https://api.github.com/users/vanpelt/events{/privacy}',
    received_events_url: 'https://api.github.com/users/vanpelt/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'wayneeseguin',
    id: 18,
    node_id: 'MDQ6VXNlcjE4',
    avatar_url: 'https://avatars.githubusercontent.com/u/18?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/wayneeseguin',
    html_url: 'https://github.com/wayneeseguin',
    followers_url: 'https://api.github.com/users/wayneeseguin/followers',
    following_url: 'https://api.github.com/users/wayneeseguin/following{/other_user}',
    gists_url: 'https://api.github.com/users/wayneeseguin/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/wayneeseguin/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/wayneeseguin/subscriptions',
    organizations_url: 'https://api.github.com/users/wayneeseguin/orgs',
    repos_url: 'https://api.github.com/users/wayneeseguin/repos',
    events_url: 'https://api.github.com/users/wayneeseguin/events{/privacy}',
    received_events_url: 'https://api.github.com/users/wayneeseguin/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'brynary',
    id: 19,
    node_id: 'MDQ6VXNlcjE5',
    avatar_url: 'https://avatars.githubusercontent.com/u/19?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/brynary',
    html_url: 'https://github.com/brynary',
    followers_url: 'https://api.github.com/users/brynary/followers',
    following_url: 'https://api.github.com/users/brynary/following{/other_user}',
    gists_url: 'https://api.github.com/users/brynary/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/brynary/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/brynary/subscriptions',
    organizations_url: 'https://api.github.com/users/brynary/orgs',
    repos_url: 'https://api.github.com/users/brynary/repos',
    events_url: 'https://api.github.com/users/brynary/events{/privacy}',
    received_events_url: 'https://api.github.com/users/brynary/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'kevinclark',
    id: 20,
    node_id: 'MDQ6VXNlcjIw',
    avatar_url: 'https://avatars.githubusercontent.com/u/20?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/kevinclark',
    html_url: 'https://github.com/kevinclark',
    followers_url: 'https://api.github.com/users/kevinclark/followers',
    following_url: 'https://api.github.com/users/kevinclark/following{/other_user}',
    gists_url: 'https://api.github.com/users/kevinclark/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/kevinclark/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/kevinclark/subscriptions',
    organizations_url: 'https://api.github.com/users/kevinclark/orgs',
    repos_url: 'https://api.github.com/users/kevinclark/repos',
    events_url: 'https://api.github.com/users/kevinclark/events{/privacy}',
    received_events_url: 'https://api.github.com/users/kevinclark/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'technoweenie',
    id: 21,
    node_id: 'MDQ6VXNlcjIx',
    avatar_url: 'https://avatars.githubusercontent.com/u/21?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/technoweenie',
    html_url: 'https://github.com/technoweenie',
    followers_url: 'https://api.github.com/users/technoweenie/followers',
    following_url: 'https://api.github.com/users/technoweenie/following{/other_user}',
    gists_url: 'https://api.github.com/users/technoweenie/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/technoweenie/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/technoweenie/subscriptions',
    organizations_url: 'https://api.github.com/users/technoweenie/orgs',
    repos_url: 'https://api.github.com/users/technoweenie/repos',
    events_url: 'https://api.github.com/users/technoweenie/events{/privacy}',
    received_events_url: 'https://api.github.com/users/technoweenie/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'macournoyer',
    id: 22,
    node_id: 'MDQ6VXNlcjIy',
    avatar_url: 'https://avatars.githubusercontent.com/u/22?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/macournoyer',
    html_url: 'https://github.com/macournoyer',
    followers_url: 'https://api.github.com/users/macournoyer/followers',
    following_url: 'https://api.github.com/users/macournoyer/following{/other_user}',
    gists_url: 'https://api.github.com/users/macournoyer/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/macournoyer/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/macournoyer/subscriptions',
    organizations_url: 'https://api.github.com/users/macournoyer/orgs',
    repos_url: 'https://api.github.com/users/macournoyer/repos',
    events_url: 'https://api.github.com/users/macournoyer/events{/privacy}',
    received_events_url: 'https://api.github.com/users/macournoyer/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'takeo',
    id: 23,
    node_id: 'MDQ6VXNlcjIz',
    avatar_url: 'https://avatars.githubusercontent.com/u/23?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/takeo',
    html_url: 'https://github.com/takeo',
    followers_url: 'https://api.github.com/users/takeo/followers',
    following_url: 'https://api.github.com/users/takeo/following{/other_user}',
    gists_url: 'https://api.github.com/users/takeo/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/takeo/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/takeo/subscriptions',
    organizations_url: 'https://api.github.com/users/takeo/orgs',
    repos_url: 'https://api.github.com/users/takeo/repos',
    events_url: 'https://api.github.com/users/takeo/events{/privacy}',
    received_events_url: 'https://api.github.com/users/takeo/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'caged',
    id: 25,
    node_id: 'MDQ6VXNlcjI1',
    avatar_url: 'https://avatars.githubusercontent.com/u/25?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/caged',
    html_url: 'https://github.com/caged',
    followers_url: 'https://api.github.com/users/caged/followers',
    following_url: 'https://api.github.com/users/caged/following{/other_user}',
    gists_url: 'https://api.github.com/users/caged/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/caged/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/caged/subscriptions',
    organizations_url: 'https://api.github.com/users/caged/orgs',
    repos_url: 'https://api.github.com/users/caged/repos',
    events_url: 'https://api.github.com/users/caged/events{/privacy}',
    received_events_url: 'https://api.github.com/users/caged/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'topfunky',
    id: 26,
    node_id: 'MDQ6VXNlcjI2',
    avatar_url: 'https://avatars.githubusercontent.com/u/26?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/topfunky',
    html_url: 'https://github.com/topfunky',
    followers_url: 'https://api.github.com/users/topfunky/followers',
    following_url: 'https://api.github.com/users/topfunky/following{/other_user}',
    gists_url: 'https://api.github.com/users/topfunky/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/topfunky/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/topfunky/subscriptions',
    organizations_url: 'https://api.github.com/users/topfunky/orgs',
    repos_url: 'https://api.github.com/users/topfunky/repos',
    events_url: 'https://api.github.com/users/topfunky/events{/privacy}',
    received_events_url: 'https://api.github.com/users/topfunky/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'anotherjesse',
    id: 27,
    node_id: 'MDQ6VXNlcjI3',
    avatar_url: 'https://avatars.githubusercontent.com/u/27?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/anotherjesse',
    html_url: 'https://github.com/anotherjesse',
    followers_url: 'https://api.github.com/users/anotherjesse/followers',
    following_url: 'https://api.github.com/users/anotherjesse/following{/other_user}',
    gists_url: 'https://api.github.com/users/anotherjesse/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/anotherjesse/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/anotherjesse/subscriptions',
    organizations_url: 'https://api.github.com/users/anotherjesse/orgs',
    repos_url: 'https://api.github.com/users/anotherjesse/repos',
    events_url: 'https://api.github.com/users/anotherjesse/events{/privacy}',
    received_events_url: 'https://api.github.com/users/anotherjesse/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'roland',
    id: 28,
    node_id: 'MDQ6VXNlcjI4',
    avatar_url: 'https://avatars.githubusercontent.com/u/28?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/roland',
    html_url: 'https://github.com/roland',
    followers_url: 'https://api.github.com/users/roland/followers',
    following_url: 'https://api.github.com/users/roland/following{/other_user}',
    gists_url: 'https://api.github.com/users/roland/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/roland/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/roland/subscriptions',
    organizations_url: 'https://api.github.com/users/roland/orgs',
    repos_url: 'https://api.github.com/users/roland/repos',
    events_url: 'https://api.github.com/users/roland/events{/privacy}',
    received_events_url: 'https://api.github.com/users/roland/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'lukas',
    id: 29,
    node_id: 'MDQ6VXNlcjI5',
    avatar_url: 'https://avatars.githubusercontent.com/u/29?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/lukas',
    html_url: 'https://github.com/lukas',
    followers_url: 'https://api.github.com/users/lukas/followers',
    following_url: 'https://api.github.com/users/lukas/following{/other_user}',
    gists_url: 'https://api.github.com/users/lukas/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/lukas/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/lukas/subscriptions',
    organizations_url: 'https://api.github.com/users/lukas/orgs',
    repos_url: 'https://api.github.com/users/lukas/repos',
    events_url: 'https://api.github.com/users/lukas/events{/privacy}',
    received_events_url: 'https://api.github.com/users/lukas/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'fanvsfan',
    id: 30,
    node_id: 'MDQ6VXNlcjMw',
    avatar_url: 'https://avatars.githubusercontent.com/u/30?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/fanvsfan',
    html_url: 'https://github.com/fanvsfan',
    followers_url: 'https://api.github.com/users/fanvsfan/followers',
    following_url: 'https://api.github.com/users/fanvsfan/following{/other_user}',
    gists_url: 'https://api.github.com/users/fanvsfan/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/fanvsfan/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/fanvsfan/subscriptions',
    organizations_url: 'https://api.github.com/users/fanvsfan/orgs',
    repos_url: 'https://api.github.com/users/fanvsfan/repos',
    events_url: 'https://api.github.com/users/fanvsfan/events{/privacy}',
    received_events_url: 'https://api.github.com/users/fanvsfan/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'tomtt',
    id: 31,
    node_id: 'MDQ6VXNlcjMx',
    avatar_url: 'https://avatars.githubusercontent.com/u/31?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/tomtt',
    html_url: 'https://github.com/tomtt',
    followers_url: 'https://api.github.com/users/tomtt/followers',
    following_url: 'https://api.github.com/users/tomtt/following{/other_user}',
    gists_url: 'https://api.github.com/users/tomtt/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/tomtt/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/tomtt/subscriptions',
    organizations_url: 'https://api.github.com/users/tomtt/orgs',
    repos_url: 'https://api.github.com/users/tomtt/repos',
    events_url: 'https://api.github.com/users/tomtt/events{/privacy}',
    received_events_url: 'https://api.github.com/users/tomtt/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'railsjitsu',
    id: 32,
    node_id: 'MDQ6VXNlcjMy',
    avatar_url: 'https://avatars.githubusercontent.com/u/32?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/railsjitsu',
    html_url: 'https://github.com/railsjitsu',
    followers_url: 'https://api.github.com/users/railsjitsu/followers',
    following_url: 'https://api.github.com/users/railsjitsu/following{/other_user}',
    gists_url: 'https://api.github.com/users/railsjitsu/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/railsjitsu/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/railsjitsu/subscriptions',
    organizations_url: 'https://api.github.com/users/railsjitsu/orgs',
    repos_url: 'https://api.github.com/users/railsjitsu/repos',
    events_url: 'https://api.github.com/users/railsjitsu/events{/privacy}',
    received_events_url: 'https://api.github.com/users/railsjitsu/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'nitay',
    id: 34,
    node_id: 'MDQ6VXNlcjM0',
    avatar_url: 'https://avatars.githubusercontent.com/u/34?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/nitay',
    html_url: 'https://github.com/nitay',
    followers_url: 'https://api.github.com/users/nitay/followers',
    following_url: 'https://api.github.com/users/nitay/following{/other_user}',
    gists_url: 'https://api.github.com/users/nitay/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/nitay/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/nitay/subscriptions',
    organizations_url: 'https://api.github.com/users/nitay/orgs',
    repos_url: 'https://api.github.com/users/nitay/repos',
    events_url: 'https://api.github.com/users/nitay/events{/privacy}',
    received_events_url: 'https://api.github.com/users/nitay/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'kevwil',
    id: 35,
    node_id: 'MDQ6VXNlcjM1',
    avatar_url: 'https://avatars.githubusercontent.com/u/35?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/kevwil',
    html_url: 'https://github.com/kevwil',
    followers_url: 'https://api.github.com/users/kevwil/followers',
    following_url: 'https://api.github.com/users/kevwil/following{/other_user}',
    gists_url: 'https://api.github.com/users/kevwil/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/kevwil/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/kevwil/subscriptions',
    organizations_url: 'https://api.github.com/users/kevwil/orgs',
    repos_url: 'https://api.github.com/users/kevwil/repos',
    events_url: 'https://api.github.com/users/kevwil/events{/privacy}',
    received_events_url: 'https://api.github.com/users/kevwil/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'KirinDave',
    id: 36,
    node_id: 'MDQ6VXNlcjM2',
    avatar_url: 'https://avatars.githubusercontent.com/u/36?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/KirinDave',
    html_url: 'https://github.com/KirinDave',
    followers_url: 'https://api.github.com/users/KirinDave/followers',
    following_url: 'https://api.github.com/users/KirinDave/following{/other_user}',
    gists_url: 'https://api.github.com/users/KirinDave/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/KirinDave/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/KirinDave/subscriptions',
    organizations_url: 'https://api.github.com/users/KirinDave/orgs',
    repos_url: 'https://api.github.com/users/KirinDave/repos',
    events_url: 'https://api.github.com/users/KirinDave/events{/privacy}',
    received_events_url: 'https://api.github.com/users/KirinDave/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'jamesgolick',
    id: 37,
    node_id: 'MDQ6VXNlcjM3',
    avatar_url: 'https://avatars.githubusercontent.com/u/37?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/jamesgolick',
    html_url: 'https://github.com/jamesgolick',
    followers_url: 'https://api.github.com/users/jamesgolick/followers',
    following_url: 'https://api.github.com/users/jamesgolick/following{/other_user}',
    gists_url: 'https://api.github.com/users/jamesgolick/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/jamesgolick/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/jamesgolick/subscriptions',
    organizations_url: 'https://api.github.com/users/jamesgolick/orgs',
    repos_url: 'https://api.github.com/users/jamesgolick/repos',
    events_url: 'https://api.github.com/users/jamesgolick/events{/privacy}',
    received_events_url: 'https://api.github.com/users/jamesgolick/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'atmos',
    id: 38,
    node_id: 'MDQ6VXNlcjM4',
    avatar_url: 'https://avatars.githubusercontent.com/u/38?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/atmos',
    html_url: 'https://github.com/atmos',
    followers_url: 'https://api.github.com/users/atmos/followers',
    following_url: 'https://api.github.com/users/atmos/following{/other_user}',
    gists_url: 'https://api.github.com/users/atmos/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/atmos/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/atmos/subscriptions',
    organizations_url: 'https://api.github.com/users/atmos/orgs',
    repos_url: 'https://api.github.com/users/atmos/repos',
    events_url: 'https://api.github.com/users/atmos/events{/privacy}',
    received_events_url: 'https://api.github.com/users/atmos/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'errfree',
    id: 44,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjQ0',
    avatar_url: 'https://avatars.githubusercontent.com/u/44?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/errfree',
    html_url: 'https://github.com/errfree',
    followers_url: 'https://api.github.com/users/errfree/followers',
    following_url: 'https://api.github.com/users/errfree/following{/other_user}',
    gists_url: 'https://api.github.com/users/errfree/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/errfree/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/errfree/subscriptions',
    organizations_url: 'https://api.github.com/users/errfree/orgs',
    repos_url: 'https://api.github.com/users/errfree/repos',
    events_url: 'https://api.github.com/users/errfree/events{/privacy}',
    received_events_url: 'https://api.github.com/users/errfree/received_events',
    type: 'Organization',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'sethfitz',
    id: 45,
    node_id: 'MDQ6VXNlcjQ1',
    avatar_url: 'https://avatars.githubusercontent.com/u/45?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/sethfitz',
    html_url: 'https://github.com/sethfitz',
    followers_url: 'https://api.github.com/users/sethfitz/followers',
    following_url: 'https://api.github.com/users/sethfitz/following{/other_user}',
    gists_url: 'https://api.github.com/users/sethfitz/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/sethfitz/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/sethfitz/subscriptions',
    organizations_url: 'https://api.github.com/users/sethfitz/orgs',
    repos_url: 'https://api.github.com/users/sethfitz/repos',
    events_url: 'https://api.github.com/users/sethfitz/events{/privacy}',
    received_events_url: 'https://api.github.com/users/sethfitz/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  {
    login: 'bmizerany',
    id: 46,
    node_id: 'MDQ6VXNlcjQ2',
    avatar_url: 'https://avatars.githubusercontent.com/u/46?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bmizerany',
    html_url: 'https://github.com/bmizerany',
    followers_url: 'https://api.github.com/users/bmizerany/followers',
    following_url: 'https://api.github.com/users/bmizerany/following{/other_user}',
    gists_url: 'https://api.github.com/users/bmizerany/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bmizerany/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bmizerany/subscriptions',
    organizations_url: 'https://api.github.com/users/bmizerany/orgs',
    repos_url: 'https://api.github.com/users/bmizerany/repos',
    events_url: 'https://api.github.com/users/bmizerany/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bmizerany/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  }
]
*/


/*

--------------   Approach 2 (promise chaining)   ---------------------
fetch('https://api.github.com/users')
.then((response) => {
  return response.json() ;
})
.then((response) => {
  console.log(response) ;
}) ;

---------------   display avatar image on HTML ------------------------
fetch('https://api.github.com/users')
.then((response) => {
  return response.json() ;
})
.then((data) => {
  const parent = document.getElementById('container') ;

  for(let i=0; i<data.length; i++) {
    const image = document.createElement('img') ;
    image.src = data[i].avatar_url ;
    image.style.height = '200px' ;
    image.style.width = '200px' ;

    parent.append(image) ;
  }

}) ;


======================   JSON vs JS object  ====================
1. 'json' a string format readable by all language but js obj is understood only by js
2. 'json' cannot contain function, --- 
3. 'json' common universal format to communicate(share data) 

------------------------  object --> json  ----------------------------
const js_obj = {
  name: 'rohit',
  age: 36 ,
  address: 'dwaarka',
  und: undefined // ignored by json
}

const jsonFormat = JSON.stringify(js_obj) ;
console.log(jsonFormat) ;

---->>> {"name":"rohit","age":36,"address":"dwaarka"}

------------------------  json ---> object  ----------------------------
const jsonFormat = `{
  "name":"rohit",
  "age":36,
  "address":"dwaarka"
}` ;
const js_obj = JSON.parse(jsonFormat) ;
console.log(js_obj) ;
---->>> { name: 'rohit', age: 36, address: 'dwaarka' }

==================  PROMISE failure =================================
reasons -- 1. internet down ,
           2. server down,
           3. DNS down

------------------------>>> WRONG url <<<----------------------------
fetch('https://api.github.com/us--ers')
.then((response) => {
  if(!response.ok) {
    throw new Error('Data is not present in the api you are fetching!!') ;
  }

  return response.json() ;
})
.then((data) => {
  const parent = document.getElementById('container') ;

  for(let i=0; i<data.length; i++) {
    const image = document.createElement('img') ;
    image.src = data[i].avatar_url ;
    image.style.height = '200px' ;
    image.style.width = '200px' ;

    parent.append(image) ;
  }
})
.catch((error) => {
  const parent = document.getElementById('container') ;
  parent.textContent = 'Oh SHIT'+error.message ;
})

---->>> catch will handle errors thrown (after response = fulfilled but no data)

===================== create PROMISES ===========================
const promise = new Promise((resolve, reject) => {
  // reject('Bahenchooodd, ye chal kyaa raha h!!') ;
  // resolve('promise fulfilled!! ENJOY YOURSELF') ;
  resolve({
    name: 'rohit',
    age: 40
  })
})

promise.then((response) => {
  console.log(response) ;
})
.catch((error) => {
  console.log(error) ;
})

---->>> { name: 'rohit', age: 40 }


=================   zomato problem solve ======================
const orderDetails = {
  orderId : 21312312,
  food: ['Pizza', 'Biryani', 'Coke'] ,
  cost: 453,
  customer_name: 'dinesh',
  customer_location: 'dwarkaa delhi',
  resturant_location: 'Thiruvananthampuram'
}


const orderPlacement = function (orderDetails) {
  console.log(`Payment of ${orderDetails.cost} is under process!!...`) ;
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The payment has been recieved! Your order has been placed!') ;
      orderDetails.payment_status = true ;
      resolve(orderDetails) ;
    }, 3000)
  })
  return p1 ;
}

const prepareFood = function(orderDetails) {
  console.log(`Your foods ${orderDetails.food} preparation has started!!`) ;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Your food is prepared!!..') ;
      orderDetails.token = 111211 ;
      resolve(orderDetails) ;
    }, 3000)
    
  })
}

const pickupOrder = function (orderDetails) {
  console.log( `Your food will be picked by delivery agent soon from ${orderDetails.resturant_location}`) ;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Your food has been picked') ;
      orderDetails.pickup = true ;
      resolve(orderDetails) ;
    }, 3000)
  })
}

const deliverOrder = function(orderDetails) {
  console.log(`Your order will be delivered soon by delvery agent DINESH on ${orderDetails.customer_location}`) ;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Your order has been delivered successfully!!, ENJOY YOUR MEAL') ;
      orderDetails.delivered = true ;
      resolve(orderDetails) ;
    }, 3000)
  })
}



orderPlacement(orderDetails)
.then((orderDetails) => prepareFood(orderDetails))
.then((orderDetails) => pickupOrder(orderDetails))
.then((orderDetails) => deliverOrder(orderDetails))
.catch((error) => console.log(error)) ;

----------------------------------------------------------------------
Payment of 453 is under process!!...
The payment has been recieved! Your order has been placed!
Your foods Pizza,Biryani,Coke preparation has started!!
Your food will be picked by delivery agent soon from Thiruvananthampuram
Your order will be delivered soon by delvery agent DINESH on dwarkaa delhi
Your food is prepared!!..
Your food has been picked
Your order has been delivered successfully!!, ENJOY YOUR MEAL


=========================   FINALLY   ==================================

const promise = new Promise((resolve, reject) => {
  // reject('Bahenchooodd, ye chal kyaa raha h!!') ;
  // resolve('promise fulfilled!! ENJOY YOURSELF') ;
  resolve({
    name: 'rohit',
    age: 40
  })
})

promise.then((response) => {
  console.log(response) ;
})
.catch((error) => {
  console.log(error) ;
})
.finally(() => {
  console.log('finally this bullshit is overrrr!!!') ;
})

---->>> output 
name: 'rohit', age: 40 }
finally this bullshit is overrrr!!!








*/


const promise = new Promise((resolve, reject) => {
  // reject('Bahenchooodd, ye chal kyaa raha h!!') ;
  // resolve('promise fulfilled!! ENJOY YOURSELF') ;
  resolve({
    name: 'rohit',
    age: 40
  })
})

promise.then((response) => {
  console.log(response) ;
})
.catch((error) => {
  console.log(error) ;
})
.finally(() => {
  console.log('finally this bullshit is overrrr!!!') ;
})









