# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

location01 = Location.create(city: "New York", province: "N Y", state: "U S A")
location02 = Location.create(city: "Las Vegas", province: "N V", state: "U S A")

t_d = Category.create(name:"Technology and Design")
s_h = Category.create(name:"Health and Spirituality")
p_s = Category.create(name:"Science and Philosophy")
a_s_c = Category.create(name:"Art, Sports and Culture")
h_p = Category.create(name:"Politics and History")

user01 = User.create(name: "tom", location_id: location01.id, password: "satan", email: "atom.syvo@gmail.com", age: 32)
user02 = User.create(name: "joe", location_id: location02.id, password: "special", email: "josephgavinsyverson@gmail.com", age: 29)

user01.followers << user02

article01 = Article.create(title: "Hello World", author: "Josh", description: "Test", src: "seeds.rb", url: "https://guides.rubyonrails.org")
article02 = Article.create(title: "Goodbye World", author: "Otha", description: "Testo", src: "seeds.rb", url: "https://guides.rubyonrails.org")
article03 = Article.create(title: "Hello God", author: "Danielle", description: "Testing", src: "seeds.rb", url: "https://guides.rubyonrails.org")

user_article = UserArticle.create(user_id: user01.id, article_id: article01.id)
comment = Comment.create(content: "good article", user_id: user01.id, article_id: article02.id)
mention = Mention.create(article_id: article03.id, user_id: user01.id)



tag01 = Tag.create(category_id: 01, article_id: 01)
tag02 = Tag.create(category_id: 01, article_id: 01)
tag03 = Tag.create(category_id: 01, article_id: 01)
