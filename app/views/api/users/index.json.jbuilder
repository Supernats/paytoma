json.array! @users do |user|
  json.id user.id
  json.email user.email
  json.username user.username if user.username
end
