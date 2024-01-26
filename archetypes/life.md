---
title: {{ replace .Name "-" " " | title }}
subtitle: "副标题"
date: {{ .Date }}
author: {{ .Site.Author.name }}
# weight: 0
description: "十年之约"
keywords: [""] #关键词
type: posts
tags: ["life","生活随笔","下一个十年"]
categories: ["life"]
# 转载文章设置
# repost:
#   enable: true
#   url: ""
featuredImage: "/images/posts/featured-image-preview.jpg"
#featuredImagePreview: "/images/posts/featured-image-preview.jpg"
# 文章资源
# resources:
#   - name: featured-image  # 文章资源
#     src: featured-image-preview.jpg  #地址
#   - name: featured-image-preview 
#     src: featured-image-preview.jpg

# See details front matter: https://fixit.lruihao.cn/theme-documentation-content/#front-matter

#文章密码设置
password: geek
message: "随缘进入，请输入口令！"
---
{{< admonition quote "标题" >}}
note abstract info tip success question warning failure danger bug example quote
{{< /admonition >}}
这里使用MD语法编写你的文章
<!--more-->