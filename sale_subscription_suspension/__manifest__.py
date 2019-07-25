# Copyright (C) 2019 - TODAY, Open Source Integrators
# License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl).

{
    'name': 'sale_subscription_suspension',
    'version': '12.0.1.0.0',
    'author': 'Open Source Integrators',
    'summary': '''Adds the ability to suspend subscriptions, and re-activate subscriptions.
                  During the period of suspension, new invoices will not be created.''',
    'license': 'LGPL-3',
    'category': 'subscription',
    'maintainer': 'Open Source Integrators',
    'website': 'http://www.opensourceintegrators.com',
    'depends': ['sale_subscription'],
    'data': [
        'data/sale_subscription_suspension.xml',
            ],
    'installable': True,
}
