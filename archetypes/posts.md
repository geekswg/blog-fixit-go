---
title: {{ replace .Name "-" " " | title }}
subtitle: "副标题"
date: {{ .Date }}
author: {{ .Site.Author.name }}
# weight: 0
description: "摘要"
keywords: ["geekswg","毕少侠"]

tags: ["标签1","标签2"]
categories: ["分类"]
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
---
{{< admonition quote "quote" >}}
note abstract info tip success question warning failure danger bug example quote
{{< /admonition >}}
这里使用MD语法编写你的文章
<!--more-->