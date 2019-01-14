import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, TextField, Grid, Button, FormControl, Select, MenuItem } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons';


const styles = theme => ({
    dropDownContainer: {
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '3px',
        borderColor: 'rgb(255,255,255)',
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit
    },
    dropDownLable: {
        borderRight: '1px solid rgba(255,255,255,0.2)',
        fontWeight: 'light',
        float: 'left',
        position: 'reltive',
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingRight: theme.spacing.unit
    },
    dropDown: {
        paddingLeft: theme.spacing.unit * 2,
        marginTop: '4px'
    },
    textFieldInput: {
        color: 'white !important'
    },
    textField: {
        color: 'white !important',
    },
    continueButton: {
        backgroundColor: 'rgb(31,133,163)',
        marginLeft: theme.spacing.unit * 4
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
        fontSize: 14,
    },
})
class SendStep extends Component {

    state = {
        currencyId: 0,
        labelWidth: 0,
        availableCurrencies: ['Aion', 'Plat'],
        recipient: this.props.to,
        amount: this.props.amount,
        customNrg: false,
        nrgPrice: this.props.nrgPrice, //todo:calculate on load
        nrgLimit: this.props.nrgLimit, //todo:hardcode when integrating
        nrg: this.props.nrg ? this.props.nrg : 12456,//todo calculate from nrgPrice and nrgLimit
    }

    componentDidMount() {

    }

    handleCurrencyChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onRecipientEntered = (event) => {
        this.setState({ recipient: event.target.value })
    }

    onAmountEntered = (event) => {
        this.setState({ amount: event.target.value })
    }

    onEditNrg = () => {
        this.setState({ customNrg: true })
    }

    onNrgPriceEntered = (event) => {

        this.setState({
            nrgPrice: event.target.value,
            nrg: 2342342 //todo: recalculate
        })
    }

    onNrgLimitEntered = (event) => {
        this.setState({
            nrgLimit: event.target.value,
            nrg: 54635523 //todo: recalculate 
        })
    }

    isFormValid = () => {
        const { recipient, amount } = this.state;
        return typeof (recipient) !== 'undefined' && recipient.length > 0 && !isNaN(parseFloat(amount)); //todo add nrg validation
    }

    render() {
        const { classes, onSendStepBack, onSendStepContinue } = this.props;
        const { availableCurrencies, currencyId, amount, recipient, customNrg, nrg, nrgLimit, nrgPrice } = this.state;

        const dropDownItems = availableCurrencies.map((item, index) => {
            return (<MenuItem key={index} value={index}>{item}</MenuItem>)
        })

        return (
            <Grid spacing={8}
                container
                direction="column"
                justify="flex-start">
                <Grid spacing={8}
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center">
                    <Typography variant="h4" style={{ fontWeight: 'bold' }}> Send {availableCurrencies[currencyId]}</Typography>
                    <div className={classes.dropDownContainer}>

                        <Typography variant="subtitle2" className={classes.dropDownLable}>Currency:</Typography>
                        <span >
                            <FormControl className={classes.dropDown}>
                                <Select
                                    disableUnderline={true}
                                    value={this.state.currencyId}
                                    onChange={this.handleCurrencyChange}
                                    name="currencyId">
                                    {dropDownItems}
                                </Select>
                            </FormControl>
                        </span>

                    </div>

                </Grid>
                <TextField
                    disabled
                    id="standard-disabled"
                    label="FROM"
                    value={'TODO'}
                    className={classes.textField}
                    style={{ marginTop: '45px' }}
                    margin="normal"
                    InputLabelProps={{
                        className: classes.textField
                    }}
                    InputProps={{
                        disableUnderline: true,
                        classes: {
                            input: classes.textFieldInput,
                        }
                    }
                    }
                />
                <TextField
                    fullWidth
                    label="To"
                    className={classes.textField}
                    value={recipient}
                    margin="normal"
                    color="primary"
                    onChange={this.onRecipientEntered}
                    InputLabelProps={{
                        className: classes.textField,
                    }}
                    InputProps={{
                        classes: {
                            input: classes.textFieldInput,
                        },
                    }} />

                <TextField
                    fullWidth
                    label="Amount"
                    className={classes.textField}
                    value={amount}
                    margin="normal"
                    color="primary"
                    type="number"
                    onChange={this.onAmountEntered}
                    InputLabelProps={{
                        className: classes.textField,
                    }}
                    InputProps={{
                        classes: {
                            input: classes.textFieldInput,
                        }
                    }
                    } />
                {!customNrg ?
                    <Grid spacing={8}
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        style={{ paddingTop: '15px' }}>
                        <TextField
                            disabled
                            id="standard-disabled"
                            label="MAX NRG COST"
                            value={nrg}
                            className={classes.textField}
                            margin="normal"
                            InputLabelProps={{
                                className: classes.textField,
                            }}
                            InputProps={{
                                disableUnderline: true,
                                classes: {
                                    input: classes.textFieldInput,
                                }
                            }
                            }
                        />

                        <Button variant="outlined" onClick={this.onEditNrg}>EDIT</Button>
                    </Grid>
                    : <div>
                        <Grid
                            container
                            spacing={16}
                            direction="row"
                            justify="space-evenly"
                            alignItems="center">

                            <Grid item xs>
                                <TextField
                                    fullWidth
                                    label="NRG Price"
                                    className={classes.textField}
                                    value={nrgPrice}
                                    margin="normal"
                                    color="primary"
                                    type="number"
                                    onChange={this.onNrgPriceEntered}
                                    InputLabelProps={{
                                        className: classes.textField,
                                    }}
                                    InputProps={{
                                        classes: {
                                            input: classes.textFieldInput,
                                        }
                                    }
                                    } />
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    fullWidth
                                    label="NRG Limit"
                                    className={classes.textField}
                                    value={nrgLimit}
                                    margin="normal"
                                    color="primary"
                                    type="number"
                                    onChange={this.onNrgLimitEntered}
                                    InputLabelProps={{
                                        className: classes.textField,
                                    }}
                                    InputProps={{
                                        classes: {
                                            input: classes.textFieldInput,
                                        }
                                    }
                                    } />
                            </Grid>

                        </Grid>
                    </div>}

                <Grid spacing={8}
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-start"
                    style={{ paddingTop: '25px' }}>
                    <Button
                        variant="outlined"
                        onClick={onSendStepBack}>
                        <b>Back</b>
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={!this.isFormValid()}
                        onClick={() => { onSendStepContinue(availableCurrencies[currencyId], 'todo', recipient, parseFloat(amount, 10), nrg, nrgPrice, nrgLimit, '1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz') }}
                        className={classes.continueButton}>
                        <b>Continue</b>
                        <ArrowForward className={classes.rightIcon} />
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

SendStep.propTypes = {
    classes: PropTypes.object.isRequired,
    onSendStepContinue: PropTypes.func.isRequired,
    onSendStepBack: PropTypes.func.isRequired
};

export default withStyles(styles)(SendStep);
