// 获取tags
export const TAG_LIST = 'TAG_LIST';
export const TAG_LIST_REQUEST = 'TAG_LIST_REQUEST';
export const TAG_LIST_SUCCESS = 'TAG_LIST_SUCCESS';
export const TAG_LIST_FAILURE = 'TAG_LIST_FAILURE';

// 改变选择的状态，标签、最新最热之类
export const CHANGE_OPTIONS = 'CHANGE_OPTIONS';
export const CHANGE_STYLE_MODE= 'CHANGE_STYLE_MODE';

// 显示成功或者失败信息
export const SHOW_MSG = 'SHOW_MSG';
export const HIDE_MSG = 'HIDE_MSG';

// 注册
export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

// 登录
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

// 退出
export const LOGOUT_USER = 'LOGOUT_USER';

// 用户信息
export const FETCH_PROTECTED_DATA_REQUEST = 'FETCH_PROTECTED_DATA_REQUEST';
export const RECEIVE_PROTECTED_DATA = 'RECEIVE_PROTECTED_DATA';

export const UPDATE_USER_INFORMATION = 'UPDATE_USER_INFORMATION';
export const UPDATE_USER_INFORMATION_SUCCESS = 'UPDATE_USER_INFORMATION_SUCCESS';
export const UPDATE_USER_INFORMATION_FAILURE = 'UPDATE_USER_INFORMATION_FAILURE';

// 声望查询记录
export const QUERY_REPUTATION = 'QUERY_REPUTATION';
export const QUERY_REPUTATION_SUCCESS = 'QUERY_REPUTATION_SUCCESS';
export const QUERY_REPUTATION_FAILURE = 'QUERY_REPUTATION_FAILURE';

// 添加文章
export const ADD_ARTICLE = 'ADD_ARTICLE';
export const ADD_ARTICLE_REQUEST = 'ADD_ARTICLE_REQUEST';
export const ADD_ARTICLE_SUCCESS = 'ADD_ARTICLE_SUCCESS';
export const ADD_ARTICLE_FAILURE = 'ADD_ARTICLE_FAILURE';

// 获取文章
export const GET_ARTICLE_REQUEST = 'GET_ARTICLE_REQUEST';
export const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS';
export const GET_ARTICLE_FAILURE = 'GET_ARTICLE_FAILURE';
export const GET_ARTICLE_DETAILS = 'GET_ARTICLE_DETAILS';

export const ARTICLE_LIST = 'ARTICLE_LIST';
export const ARTICLE_LIST_REQUEST = 'ARTICLE_LIST_REQUEST';
export const ARTICLE_LIST_SUCCESS = 'ARTICLE_LIST_SUCCESS';
export const ARTICLE_LIST_FAILURE = 'ARTICLE_LIST_FAILURE';

export const ARTICLE_DETAIL = 'ARTICLE_DETAIL';
export const ARTICLE_DETAIL_REQUEST = 'ARTICLE_DETAIL_REQUEST';
export const ARTICLE_DETAIL_SUCCESS = 'ARTICLE_DETAIL_SUCCESS';
export const ARTICLE_DETAIL_FAILURE = 'ARTICLE_DETAIL_FAILURE';

// 删除文章
export const DELETE_ADMINARTICLE = 'DELETE_ADMINARTICLE';
export const DELETE_ADMINARTICLE_SUCCESS = 'DELETE_ADMINARTICLE_SUCCESS';
export const DELETE_ADMINARTICLE_FAILURE = 'DELETE_ADMINARTICLE_FAILURE';
export const DELETE_ADMINARTICLE_REQUEST = 'DELETE_ADMINARTICLE_REQUEST';

// 删除评论
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE';
export const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST';

// 添加评论
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_NUMBER = 'ADD_COMMENT_NUMBER';

// 获取评论
export const COMMENT_LIST = 'COMMENT_LIST';
export const COMMENT_LIST_REQUEST = 'COMMENT_LIST_REQUEST';
export const COMMENT_LIST_SUCCESS = 'COMMENT_LIST_SUCCESS';
export const COMMENT_LIST_FAILURE = 'COMMENT_LIST_FAILURE';

// 添加回复
export const ADD_REPLY_SUCCESS = 'ADD_REPLY_SUCCESS';

// 点赞文章或者评论
export const TOGGLE_LIKE = 'TOGGLE_LIKE';
export const TOGGLE_LIKE_REQUEST = 'TOGGLE_LIKE_REQUEST';
export const TOGGLE_LIKE_SUCCESS = 'TOGGLE_LIKE_SUCCESS';
export const TOGGLE_LIKE_FAILURE = 'TOGGLE_LIKE_FAILURE';
export const TOGGLE_LIKE_EXBUG = 'TOGGLE_LIKE_EXBUG';

// 下一篇文章
export const PRENEXT_ARTICLE = 'PRENEXT_ARTICLE';
export const PRENEXT_ARTICLE_REQUEST = 'PRENEXT_ARTICLE_REQUEST';
export const PRENEXT_ARTICLE_SUCCESS = 'PRENEXT_ARTICLE_SUCCESS';
export const PRENEXT_ARTICLE_FAILURE = 'PRENEXT_ARTICLE_FAILURE';

// 第三方登录
export const GET_SNSLOGINS = 'GET_SNSLOGINS';
export const GET_SNSLOGINS_SUCCESS = 'GET_SNSLOGINS_SUCCESS';
export const GET_SNSLOGINS_FAILURE = 'GET_SNSLOGINS_FAILURE';

//用户信息自我管理admin
export const GET_ADMINCOMMENT = 'GET_ADMINCOMMENT';
export const GET_ADMINCOMMENT_SUCCESS = 'GET_ADMINCOMMENT_SUCCESS';
export const GET_ADMINCOMMENT_FAILURE = 'GET_ADMINCOMMENT_FAILURE';
export const GET_ADMINCOMMENT_REQUEST = 'GET_ADMINCOMMENT_REQUEST';

export const GET_ADMINTAG = 'GET_ADMINTAG';
export const GET_ADMINTAG_SUCCESS = 'GET_ADMINTAG_SUCCESS';
export const GET_ADMINTAG_FAILURE = 'GET_ADMINTAG_FAILURE';
export const GET_ADMINTAG_REQUEST = 'GET_ADMINTAG_REQUEST';

export const ADD_ADMINTAG = 'ADD_ADMINTAG';
export const ADD_ADMINTAG_SUCCESS = 'ADD_ADMINTAG_SUCCESS';
export const ADD_ADMINTAG_FAILURE = 'ADD_ADMINTAG_FAILURE';
export const ADD_ADMINTAG_REQUEST = 'ADD_ADMINTAG_REQUEST';

export const DELETE_ADMINTAG = 'DELETE_ADMINTAG';
export const DELETE_ADMINTAG_SUCCESS = 'DELETE_ADMINTAG_SUCCESS';
export const DELETE_ADMINTAG_FAILURE = 'DELETE_ADMINTAG_FAILURE';
export const DELETE_ADMINTAG_REQUEST = 'DELETE_ADMINTAG_REQUEST';

export const GET_ADMINUSER = 'GET_ADMINUSER';
export const GET_ADMINUSER_SUCCESS = 'GET_ADMINUSER_SUCCESS';
export const GET_ADMINUSER_FAILURE = 'GET_ADMINUSER_FAILURE';
export const GET_ADMINUSER_REQUEST = 'GET_ADMINUSER_REQUEST';

export const ADD_ADMINUSER = 'ADD_ADMINUSER';
export const ADD_ADMINUSER_SUCCESS = 'ADD_ADMINUSER_SUCCESS';
export const ADD_ADMINUSER_FAILURE = 'ADD_ADMINUSER_FAILURE';
export const ADD_ADMINUSER_REQUEST = 'ADD_ADMINUSER_REQUEST';

export const DELETE_ADMINUSER = 'DELETE_ADMINUSER';
export const DELETE_ADMINUSER_SUCCESS = 'DELETE_ADMINUSER_SUCCESS';
export const DELETE_ADMINUSER_FAILURE = 'DELETE_ADMINUSER_FAILURE';
export const DELETE_ADMINUSER_REQUEST = 'DELETE_ADMINUSER_REQUEST';

export const GET_ADMINARTICLE = 'GET_ADMINARTICLE';
export const GET_ADMINARTICLE_SUCCESS = 'GET_ADMINARTICLE_SUCCESS';
export const GET_ADMINARTICLE_FAILURE = 'GET_ADMINARTICLE_FAILURE';
export const GET_ADMINARTICLE_REQUEST = 'GET_ADMINARTICLE_REQUEST';
