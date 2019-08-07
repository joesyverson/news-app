# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user01 = User.create(name: "Tom")
user02 = User.create(name: "Joe")

article01 = Article.create(title: "Hello World")
article02 = Article.create(title: "Goodbye World")
article03 = Article.create(title: "Hello God")

user_article = UserArticle.create(user_id: 1, article_id: 1)
comment = Comment.create(content: "good article", user_id: 1, article_id: 2)
