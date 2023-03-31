import { DataTypes } from 'sequelize';
import { define } from '../utils/connection';

const EmailCode = define('emailCode', {
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

export default EmailCode;