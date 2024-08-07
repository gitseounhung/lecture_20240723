const express = require('express')
const registerUser = require('../controller/registerUser')
const checkEmail = require('../controller/checkEmail')
// const checkPassword = require('../controller/checkPassword')
const router = express.Router()

// 카카오톡 회원가입
router.post('/register', registerUser)
// 카카오톡 로그인 (회원존재체크)
router.post('/email', checkEmail)
// 카카오톡 로그인 (비밀번호체크)
// router.post('/password', checkPassword)

module.exports = router