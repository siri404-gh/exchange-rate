/* eslint-disable no-magic-numbers */
import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
import HourGlassIcon from '@material-ui/icons/HourglassFull';
import SponsorIcon from '@material-ui/icons/Favorite';
// import AttachMoney from '@material-ui/icons/AttachMoney';
// import MonetizationOnSharpIcon from '@material-ui/icons/MonetizationOnSharp';
// import EuroTwoTone from '@material-ui/icons/EuroTwoTone';
import Fab from '@material-ui/core/Fab';

class Paytmbutton extends Component {
  state = {
    submit: false,
  };
  onSubmit() {
    this.setState({
      submit: true,
    });
    document.getElementById('pay-form').submit();
  }
  render() {
    // const { classes } = this.props;
    const { url, orderId, merchantId, website, industryTypeId, channelId, customerId, amount, phone, email, callbackUrl, checksum, text } = this.props;

    return <form id="pay-form" action={url} name="f1" method="POST" style={{ margin: 0 }}>
      <input type="hidden" name="MID" value={merchantId} />
      <input type="hidden" name="WEBSITE" value={website} />
      <input type="hidden" name="INDUSTRY_TYPE_ID" value={industryTypeId} />
      <input type="hidden" name="CHANNEL_ID" value={channelId} />
      <input type="hidden" name="ORDER_ID" value={orderId} />
      <input type="hidden" name="CUST_ID" value={customerId} />
      <input type="hidden" name="TXN_AMOUNT" value={amount} />
      <input type="hidden" name="MOBILE_NO" value={phone} />
      <input type="hidden" name="PAYMENT_MODE_ONLY" value="yes" />
      <input type="hidden" name="AUTH_MODE" value="3D" />
      <input type="hidden" name="PAYMENT_TYPE_ID" value="DC" />
      <input type="hidden" name="EMAIL" value={email} />
      <input type="hidden" name="CALLBACK_URL" size="64" value={callbackUrl} />
      <input type="hidden" name="CHECKSUMHASH" value={checksum} />
      <Fab
        disabled={this.state.submit}
        onClick={this.onSubmit.bind(this)}
        variant="extended"
        size="large"
        color="secondary"
        style={{ width: '100%' }}>
        {this.state.submit ? <HourGlassIcon /> : <React.Fragment><SponsorIcon style={{ marginRight: 10 }} /> <span>{text}</span></React.Fragment> }
      </Fab>
      <img src="/img/partners.jpg" style={{ width: 230, margin: '10px auto', display: 'block' }} />
      {/* ${(1).toLocaleString('en-GB', { style: 'currency', currency: 'EUR' })} */}
    </form>;
  }
}

export default Paytmbutton;