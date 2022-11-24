import { height } from '@mui/system'
import React from 'react'

export default function Pricing() {
    return (
        <section className=" dark:bg-gray-800 dark:text-gray-100">
            <div className="container px-4 mx-auto">
                <div className="max-w-2xl mx-auto mb-16 text-center">
                    <h1 className="text-4xl font-bold lg:text-5xl text-dark">Tìm hiểu thu nhập bạn
                        <br /> có thể kiếm được với tư
                        <br />
                        cách Chủ nhà</h1>
                </div>
                <div style={{ marginBottom: 120, width: '80%', alignItems: 'center', transform: 'translateX(12%)' }}>
                    <div className="row" style={{ borderBottom: '0px' }}>
                        <div className="col">
                            <div style={{
                                backgroundColor: ' rgb(247, 247, 247)',
                                borderRadius: '12px',
                                padding: '20px',
                                paddingBottom: 5
                            }}>
                                <div style={{
                                    display: 'contents',
                                    justifyContent: 'center'
                                }}>
                                    <div style={{ fontSize: '14px', lineHeight: '18px', backgroundColor: ' rgb(247, 247, 247)', height: 30 }}>Chủ nhà trong khu vực của bạn kiếm được trung bình*</div>
                                </div>
                                <div style={{
                                    display: 'contents',
                                    justifyContent: 'center',
                                    fontWeight: '400',
                                    flexGrow: 1,
                                    alignItems: 'flex-end',
                                    color: 'rgb(255, 56, 92)',
                                }}>
                                    <span style={{ fontWeight: 550, fontSize: 40 }}>$645</span>
                                    <span style={{ fontSize: 22, margin: 8 }}>/tháng</span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div style={{
                                backgroundColor: ' rgb(247, 247, 247)',
                                borderRadius: '12px',
                                padding: '20px',
                                paddingBottom: 5
                            }}>
                                <div style={{
                                    display: 'contents',
                                    justifyContent: 'center',
                                }}>
                                    <div style={{ fontSize: '14px', lineHeight: '18px', height: 30 }}>Họ kiếm được</div>
                                </div>
                                <div style={{
                                    justifyContent: 'center',
                                    fontWeight: '400',
                                    flexGrow: 1,
                                    display: 'contents',
                                    alignItems: 'flex-end',
                                    backgroundColor: 'black'
                                }}>
                                    <span style={{ fontWeight: 550, fontSize: 40 }}>$43</span>
                                    <span style={{ fontSize: 22, margin: 8 }}>/đêm</span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div style={{
                                backgroundColor: ' rgb(247, 247, 247)',
                                borderRadius: '12px',
                                padding: '20px',
                                paddingBottom: 5
                            }}>
                                <div style={{
                                    display: 'contents',
                                    justifyContent: 'center'
                                }}>
                                    <div style={{ fontSize: '14px', lineHeight: '18px', height: 30 }}>Nhà/phòng cho thuê của họ được đặt</div>
                                </div>
                                <div style={{
                                    display: 'contents',
                                    justifyContent: 'center',
                                    fontWeight: '400',
                                    flexGrow: 1,
                                    alignItems: 'flex-end',
                                    backgroundColor: 'black'
                                }}>
                                    <span style={{ fontWeight: 550, fontSize: 40 }}>15</span>
                                    <span style={{ fontSize: 22, margin: 8 }}>đêm/tháng</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >

    )
}
