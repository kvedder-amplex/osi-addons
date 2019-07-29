
odoo.define('osi_analytic_sales_simple.osi_analytic_sales_simple', function (require) {
    "use strict"; 
var Widget = require('web.Widget');
var relational_fields = require('web.relational_fields');
var basic_fields = require('web.basic_fields');
var core = require('web.core');
var time = require('web.time');
var session = require('web.session');
var qweb = core.qweb;
var _t = core._t;
var LineRenderer = require('account.LineRenderer');

//ADD FIELDS
LineRenderer.include({
    _renderCreate: function (state) {
        var self = this;
        self._renderCreate(state);
        this.model.makeRecord('account.bank.statement.line', [{
            relation: 'account.tax',
            type: 'many2one',
            name: 'new_field',
            domain: [['amount', '<', 0.0]],

        }]).then(function (recordID) {
            self.handleCreateRecord = recordID;
            var record = self.model.get(self.handleCreateRecord);

            self.fields.new_field = new relational_fields.FieldMany2One(self,
                'new_field', record, {mode: 'edit'});

             var $create = $(qweb.render("reconciliation.line.create", {'state': state}));
             self.fields.withholding_tax_id.appendTo($create.find('.create_new_field .o_td_field'));
                             self.$('.create').append($create);

                function addRequiredStyle(widget) {
                widget.$el.addClass('o_required_modifier');



            }
        });
    }
    })
})