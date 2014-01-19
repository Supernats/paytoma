BillApp.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "userShow",
    "transactions": "transactionIndex",
    "transactions/new": "transactionNew",
    "transactions/:id": "transactionShow",
    "debts": "debtIndex",
    "debts/new": "debtNew",
    "debts/:id": "debtShow",
    "credits": "creditIndex",
    "credits/new": "creditNew",
    "credits/:id": "creditShow"
  },

  transactionNew: function () {
    var view = new BillApp.Views.TransactionForm({
      collection: BillApp.transactions,
      model: new BillApp.Models.Transaction()
    });
  },

  transactionIndex: function () {
    var view = new BillApp.Views.TransactionIndex({
      collection: BillApp.transactions,
    });
    this._swapView(view);
  },

  transactionShow: function () {
    var transaction = BillApp.transactions.get(id);
    var view = new BillApp.Views.TransactionShow({
      model: transaction
    });
    this._swapView(view);
  },

  debtIndex: function () {
    var view = new BillApp.Views.LoanIndex({
      collection: BillApp.debts
      });
    this._swapView(view);
  },

  debtNew: function () {
    var view = new BillApp.Views.DebtNew({
      collection: BillApp.debts,
      model: new BillApp.Models.Debt()
    });
    this._swapView(view);
  },

  debtShow: function () {
    var debt = BillApp.debts.get(id);
    var view = new BillApp.Views.DebtShow({
      model: debt
    });
    this._swapView(view);
  },

  creditIndex: function () {
    var view = new BillApp.Views.LoanIndex({
      collection: BillApp.credits
      });
    this._swapView(view);
  },

  creditNew: function () {
    var view = new BillApp.Views.DebtNew({
      collection: BillApp.credits,
      model: new BillApp.Models.Debt()
    });
    this._swapView(view);
  },

  creditShow: function () {
    var credit = BillApp.credits.get(id);
    var view = new BillApp.Views.DebtShow({
      model: credit
    });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._current_view && this._currentView.remove();
    this._current_view =  view;
    this.$rootEl.html(view.render().$el);
  }
});