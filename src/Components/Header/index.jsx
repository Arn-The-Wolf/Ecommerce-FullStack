import { Link } from "react-router-dom";
import logo from '../../Assets/images/bacola-logo.png';
import secure from '../../Assets/images/Screenshot 2024-11-11 114433.png'
import Button from '@mui/material/Button';
import { Stack, Typography } from '@mui/material';
import English from "./English";
import Currency from "./Currency";

const Header = () => {
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay</p>
                    </div>
                </div>

                <div className="navbar ml-3">
                    <Stack direction="row" spacing={2} marginRight="50px">
                        <Typography
                            variant="body1"
                            sx={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#3E445A', marginLeft: '11.5px' }}
                        >
                            About Us
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#3E445A', marginLeft: '11.5px' }}
                        >
                            My Account
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#3E445A', marginLeft: '11.5px' }}
                        >
                            Wishlist
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#3E445A', marginLeft: '11.5px' }}
                        >
                            Order Tracking
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={-1.5} alignItems="center" marginRight="-3px">
                        <Typography
                            variant="body1"
                            sx={{ display: 'flex', alignItems: 'center' }}
                        >
                            <img src={secure} alt="secure" style={{ width: '50px', height: 'auto' }} />
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#3E445A'}}
                        >
                            100% Secure delivery without contacting the courier
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={0.5} alignItems="center" border="1px solid black" >
                        <Typography
                            variant="body1"
                            sx={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#3E445A', display: 'flex', alignItems: 'center' }}
                        >
                            Need help? Call Us: <a href="help.jsx">0020 500</a>
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={-1.5} alignItems="center" width="160px" border="1px solid black" marginLeft="250px"padding="0">
                        <Typography
                            variant="body1"
                            sx={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#3E445A', fontStyle: 'semibold' }}
                        >
                            <English />
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#3E445A', fontStyle: 'semibold' }}
                        >
                            <Currency />
                        </Typography>
                    </Stack>
                    <div></div>
                </div>
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-3 w-50">
                                <Link to={'/'} >
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                            <div className="col-sm-2 align-items-center part2" >
                                <Button className="countryDrop">
                                    <div className="info d-flex-column border blue-500 rounded">
                                        <span className="">Your Location</span>
                                        <span>Rwanda</span>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;