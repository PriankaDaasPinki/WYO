import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const TimelineData = [
    {
        id: "1",
        date: "",
        title: "Grow your customer lifetime value (LTV)",
        description: " With advanced data analysis, you can gain deep insights into your customers' preferences and behaviours, allowing you to deliver personalised and targeted marketing campaigns. Automate your workflow and processes such as follow-up emails to save time and provide a seamless experience for your customers. Increase sales and revenue through enhanced customer relationships and loyalty.",
        image: "customer lifetime value",
        workingStep: [
            {
                stepTitle: "Personalise customer's experience",
                stepDescription: " ",
            },
            
        ]
    },
    {
        id: "2",
        date: "",
        title: "Omnichannel CRM",
        description: " The CRM is able to track where your customers come from, what they are interested in, their preferred social channels, and more. With this info, you can optimize marketing efforts to deliver the right content and message at the right time, subsequently increasing your monthly conversions.",
        image: "Omnichannel CRM",
        workingStep: [
            {
                stepTitle: "Being omnipresent, regardless where your customers at",
                stepDescription: "",
            },
        ]
    },

    {
      id: "3",
      date: "",
      title: "Empower your marketing strategy and drive business success",
      description: "Create a marketing strategy that is tailored to your business goals and customer needs. With a focus on customer satisfaction and engagement, you'll be able to create a marketing strategy that drives business success. By streamlining processes, you can minimize waste and increase efficiency, freeing up resources that can be used to drive growth. Improving team collaboration helps ensure that everyone is working towards a common goal, improving communication and reducing the potential for mistakes. When these elements are combined, they can help create a positive feedback loop that drives continued success and growth for the business.",
      image: "crm software",
      workingStep: [
          {
              stepTitle: "Drive growth, streamline processes & improve team collaboration",
              stepDescription: "",
          },
      ]
  },

  {
    id: "4",
    date: "",
    title: "Personalised customer experience",
    description: "Drive customised and hyper-targeted campaigns to improve customer engagement and satisfaction, through data and insights gathered from customer's engaged sessions. Tailor a unique experience for each customer based on their individual needs, preferences, and behavior that could set your business apart from the competition.",
    image: "customer service",
    workingStep: [
        {
            stepTitle: "Understanding your customers thoroughly",
            stepDescription: "",
        },
    ]
},
]

const CRMSolutionsMain = () => {
    return (
        <div className="rn-timeline-wrapper timeline-style-one position-relative">
            <div className="timeline-line"></div>
            {/* Start Single Timeline  */}

            {TimelineData.map((data, index) =>(
                <div className="single-timeline mt--50" key={index}>
                    <div className="">
                        <div className="time-line-circle"></div>
                    </div>
                    <div className="single-content">
                        <div className="inner">
                            <div className="row row--30 align-items-center">
                                <div className="order-2 order-lg-1 col-lg-6 mt_md--40 mt_sm--40">
                                    <div className="content">
                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <span className="date-of-timeline">{data.date}</span>
                                        </ScrollAnimation>

                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <h2 className="title">{data.title}</h2>
                                        </ScrollAnimation>

                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <p className="description">{data.description}</p>
                                        </ScrollAnimation>

                                        <div className="row row--30">
                                            {data.workingStep.map((data, index)=>(
                                                <div className="col-lg-6 col-md-6 col-12" key={index}>
                                                    <div className="working-list">
                                                        <ScrollAnimation 
                                                        animateIn="fadeInUp"
                                                        animateOut="fadeInOut"
                                                        animateOnce={true}>
                                                            <h5 className="working-title">{data.stepTitle}</h5>
                                                        </ScrollAnimation>

                                                        <ScrollAnimation 
                                                        animateIn="fadeInUp"
                                                        animateOut="fadeInOut"
                                                        animateOnce={true}>
                                                            <p>{data.stepDescription}</p>
                                                        </ScrollAnimation>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="read-morebtn">
                                            <ScrollAnimation 
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}>
                                                <a className="btn-default btn-large round" href="/contact"><span>Get Started Now</span></a>
                                            </ScrollAnimation>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 order-lg-2 col-lg-6">
                                    <div className="thumbnail">
                                        <img className="w-100" src={`./images/timeline/${data.image}.jpg`} alt="Corporate React Template" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
           
            {/* End Single Timeline  */}
        </div>
    )
}

export default CRMSolutionsMain;
