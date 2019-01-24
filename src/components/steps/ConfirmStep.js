import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Web3 from 'aion-web3';
import { withStyles, Typography, Grid, Paper } from '@material-ui/core'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'

const styles = theme => ({
    paper: {
        backgroundColor: theme.palette.background.default,
        marginTop: theme.spacing.unit * 5,
        padding: theme.spacing.unit * 3
    },
    fatLable: {
        fontWeight: 'bold',
        marginRight: theme.spacing.unit * 2,
        color:theme.palette.primary.main,
    },
    thinLable: {
        fontWeight: 300,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color:theme.palette.primary.main,
    },
    rawTitle: {
        fontWeight: 'bold',
        marginRight: theme.spacing.unit * 2,
        color:theme.palette.text.primary,
    },
    rawDetail: {
        fontWeight: 300,
        color:theme.palette.text.primary,
    },
    transactionRow: {
        marginTop: theme.spacing.unit * 1
    },
    continueButton: {
        marginLeft: theme.spacing.unit
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
        fontSize: 14,
    },
})
class ConfirmStep extends Component {


    constructor(props) {
        super(props);
        this.state = {
            web3: null
        }
    }

    componentDidMount() {
        this.setState({ web3: new Web3(new Web3.providers.HttpProvider(this.props.web3Provider))});
    }

    async sendTransaction(){
        try{
            const transactionHash = await this.state.web3.eth.sendRawTransaction(this.props.rawTransaction)
            this.props.onTransactionStepContinue(transactionHash)
        }catch(error){
            console.log(error)
        }
    }

    render() {
        const { classes, to, from, amount, nrg, nrgPrice, nrgLimit, rawTransaction, onTransactonStepBack } = this.props;

        return (
            <div>
                    <Grid spacing={0}
                        container
                        direction="column"
                        justify="flex-start">
                        <Typography variant="h4" style={{ fontWeight: 'bold', marginTop: '25px' }}>Confirm Transaction</Typography>
                        <Paper className={classes.paper}>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                wrap='nowrap'>
                                <Typography color="textSecondary" variant="subtitle2" className={classes.fatLable}>TO</Typography>
                                <Typography color="textSecondary" variant="subtitle2" className={classes.thinLable}>{to}</Typography>
                            </Grid>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                className={classes.transactionRow}
                                wrap='nowrap'>
                                <Typography color="textSecondary" variant="subtitle2" className={classes.fatLable}>FROM</Typography>
                                <Typography color="textSecondary" variant="subtitle2" className={classes.thinLable}>{from}</Typography>
                            </Grid>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                className={classes.transactionRow}
                                wrap='nowrap'>
                                <Typography color="textSecondary" variant="subtitle2" className={classes.fatLable}>AMOUNT</Typography>
                                <Typography color="textSecondary" variant="subtitle2" style={{ fontWeight: 'bold', color:'#113665' }}>{amount}</Typography>
                            </Grid>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                className={classes.transactionRow}
                                wrap='nowrap'>
                                <Typography color="textSecondary" variant="subtitle2" className={classes.fatLable}>NRG</Typography>
                                <Typography color="textSecondary" variant="subtitle2" className={classes.thinLable}>{nrg}</Typography>
                            </Grid>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                className={classes.transactionRow}
                                wrap='nowrap'>
                                <Typography color="textSecondary" variant="subtitle2" className={classes.fatLable}>NRG PRICE</Typography>
                                <Typography color="textSecondary" variant="subtitle2" className={classes.thinLable}>{nrgPrice}</Typography>
                            </Grid>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                className={classes.transactionRow}
                                wrap='nowrap'>
                                <Typography color="textSecondary" variant="subtitle2" className={classes.fatLable}>Maximum NRG</Typography>
                                <Typography color="textSecondary" variant="subtitle2" className={classes.thinLable}>{nrgLimit}</Typography>
                            </Grid>
                        </Paper>
                        <Grid
                            container
                            spacing={0}
                            wrap="wrap"
                            direction="row"
                            justify="space-between"
                            alignItems="flex-start"
                            style={{ marginTop: '25px' }}>
                            <Grid item>
                                <Typography variant="subtitle2" className={classes.rawTitle}>Raw Transaction</Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="subtitle2" className={classes.rawDetail} style={{ wordBreak: 'break-all' }}>{rawTransaction}</Typography>
                            </Grid>
                        </Grid>
                        <Grid spacing={8}
                            container
                            direction="row"
                            justify="flex-end"
                            alignItems="flex-start"
                            style={{ paddingTop: '45px' }}>
                            <SecondaryButton
                                onClick={onTransactonStepBack}
                                text='Back'/>
                            <PrimaryButton
                                showArrow
                                onClick={this.sendTransaction.bind(this)}
                                className={classes.continueButton}
                                text='Continue'/>
                        </Grid>
                    </Grid>

            </div>

        );
    }
}

ConfirmStep.propTypes = {
    classes: PropTypes.object.isRequired,
    onTransactionStepContinue: PropTypes.func.isRequired,
    onTransactonStepBack: PropTypes.func.isRequired,
    currency: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    nrg: PropTypes.number.isRequired,
    //nrgPrice: PropTypes.number.isRequired, uncomment if needed
    //nrgLimit: PropTypes.number.isRequired,
    rawTransaction: PropTypes.string.isRequired,
    web3Provider:PropTypes.string.isRequired,
};

export default withStyles(styles)(ConfirmStep);