json.(@user, :id, :username)

json.debts @user.debts do |debt|
  json.(
    debt,
    :id,
    :transaction_id,
    :creditor_id,
    :amount,
    :description
  )
end

json.credits @user.credits do |credit|
  json.(
    credit,
    :id,
    :transaction_id,
    :debtor_id,
    :amount,
    :description
  )
end
