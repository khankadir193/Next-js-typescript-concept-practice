'use client'
import { useState } from "react";
import { JobFormData } from "../types/JobFormData";
import './style.css';

const JobForm = () => {
    const [formData, setFormData] = useState<JobFormData>({
        fullName: '',
        email: '',
        phone: '',
        jobRole: '',
        experience: 0,
        skills: '',
        resume: null,
        coverLetter: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('from data...', formData);
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="inputLable">
                <label htmlFor="fullName">fullName</label>
                <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            fullName: e.target.value
                        })
                    }
                />
            </div>


            <div className="inputLable">
                <label htmlFor="email">email</label>
                <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            email: e.target.value
                        })
                    }
                />
            </div>

            <div className="inputLable">
                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            phone: e.target.value
                        })
                    }
                />
            </div>

            <div className="inputLable">
                <label htmlFor="jobRole">Job Role</label>
                <select
                    id="jobRole"
                    value={formData.jobRole}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            jobRole: e.target.value
                        })
                    }
                >
                    <option value="">Select Job Role</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="fullstack">Fullstack Develoepr</option>
                </select>
            </div>

            <div className="inputLable">
                <label htmlFor="experience">Experience</label>
                <input
                    id="experience"
                    type="number"
                    value={formData.experience}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            experience: Number(e.target.value)
                        })
                    }
                />
            </div>

            <div className="inputLable">
                <label htmlFor="skills">Skills</label>
                <input
                    id="skills"
                    type="text"
                    value={formData.skills}
                    placeholder="Next js,JavaScript,React"
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            skills: e.target.value
                        })
                    }
                />
            </div>

            <div className="inputLable">
                <label htmlFor="resume">Resume</label>
                <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            resume: e.target.files?.[0] ?? null
                        })
                    }
                />
            </div>

            <div className="inputLable">
                <label htmlFor="coverLetter">coverLetter</label>
                <textarea
                    id="coverLetter"
                    rows={5}
                    value={formData.coverLetter}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            coverLetter: e.target.value
                        })
                    }
                />
            </div>

            <button id="btn" type="submit">Submit Application</button>
        </form>
    )
}

export default JobForm;