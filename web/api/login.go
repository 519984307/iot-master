package api

import (
	"git.zgwit.com/iot/mydtu/db"
	"git.zgwit.com/iot/mydtu/model"
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/zgwit/storm/v3"
	"net/http"
)

type loginObj struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Remember bool   `json:"remember"`
}

func login(ctx *gin.Context) {
	session := sessions.Default(ctx)

	var obj loginObj
	if err := ctx.ShouldBindJSON(&obj); err != nil {
		replyError(ctx, err)
		return
	}

	var user model.User
	err := db.DB("user").Find("username",obj.Username, &user)
	if err != nil {
		if err == storm.ErrNotFound {
			replyFail(ctx, "找不到用户")
			return
		}
		replyError(ctx, err)
		return
	}
    if user.Password != obj.Password {
        replyFail(ctx, "密钥错误")
        return
    }

	if user.Disabled {
		replyFail(ctx, "用户已禁用")
		return
	}

	//存入session
	session.Set("user", user)
	_ = session.Save()

	replyOk(ctx, user)
}

func logout(c *gin.Context) {
	session := sessions.Default(c)
	session.Clear()
	_ = session.Save()
	c.JSON(http.StatusOK, gin.H{})
}
